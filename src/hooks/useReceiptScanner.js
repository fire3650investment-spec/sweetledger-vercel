
import { useState, useRef } from 'react';
import { parseReceiptWithGemini } from '../utils/helpers';

export default function useReceiptScanner({
    setLocalAmount,
    setNote,
    setSplitType,
    setCustomSplitHost,
    setCustomSplitGuest,
    setActiveOverlay,
    hostId,
    guestId
}) {
    const [isScanning, setIsScanning] = useState(false);
    const [isScanModalOpen, setIsScanModalOpen] = useState(false);
    const [scannedItems, setScannedItems] = useState([]);

    const cameraInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Reset input value to allow selecting same file again
        e.target.value = '';

        setIsScanning(true);
        const reader = new FileReader();
        reader.onloadend = async () => {
            try {
                const base64String = reader.result.split(',')[1];
                const items = await parseReceiptWithGemini(base64String);
                setIsScanning(false);

                if (items && Array.isArray(items)) {
                    setScannedItems(items);
                    setIsScanModalOpen(true);
                } else {
                    alert("掃描失敗，請再試一次或手動輸入");
                }
            } catch (error) {
                console.error("Scanning Error", error);
                setIsScanning(false);
                alert("掃描發生錯誤：" + error.message);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleCameraClick = () => { cameraInputRef.current?.click(); };
    const handleAlbumClick = () => { fileInputRef.current?.click(); };

    const handleScanConfirm = (result) => {
        const { amount: rAmount, note: rNote, splitType: rSplit, customSplit: rCustom } = result;

        if (setLocalAmount) setLocalAmount(rAmount.toString());
        if (setNote && rNote) setNote(rNote);
        if (setSplitType) setSplitType(rSplit);

        if (rCustom) {
            if (hostId && rCustom[hostId] && setCustomSplitHost) {
                setCustomSplitHost(rCustom[hostId].toString());
            }
            if (guestId && rCustom[guestId] && setCustomSplitGuest) {
                setCustomSplitGuest(rCustom[guestId].toString());
            }
        }

        if (rAmount > 0 && setActiveOverlay) {
            setActiveOverlay('category');
        }
    };

    return {
        isScanning,
        isScanModalOpen,
        setIsScanModalOpen,
        scannedItems,
        cameraInputRef,
        fileInputRef,
        handleImageUpload,
        handleCameraClick,
        handleAlbumClick,
        handleScanConfirm
    };
}
