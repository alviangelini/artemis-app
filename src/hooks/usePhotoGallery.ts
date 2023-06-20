import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from "@capacitor/preferences";
import { Capacitor } from '@capacitor/core';

// Add an empty export statement to make it module
export {};

// Function to take the photo
export function usePhotoGallery() {
    // State variable to store the array of each photo captured
    const [photos, setPhotos] = useState<UserPhoto[]>([]);
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath,
            },
            ...photos,
        ];
        setPhotos(newPhotos);
    };

    return {
        photos,
        takePhoto,
    };
}

// Type to define our photo
export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}