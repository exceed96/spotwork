'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export function ClarityAnalytics() {
    useEffect(() => {
        const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;
        if (!projectId) return;

        Clarity.init(projectId);
    }, []);

    return null;
}

