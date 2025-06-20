import React from 'react';

const PlinkoIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 0L64 32L32 64L0 32L32 0Z" fill="#A855F7" fillOpacity="0.8"/>
        <g filter="url(#filter0_d_1_2)">
            <circle cx="32" cy="32" r="4" fill="white"/>
            <circle cx="24" cy="24" r="2" fill="white"/>
            <circle cx="40" cy="24" r="2" fill="white"/>
            <circle cx="24" cy="40" r="2" fill="white"/>
            <circle cx="40" cy="40" r="2" fill="white"/>
            <circle cx="32" cy="20" r="2" fill="white"/>
            <circle cx="32" cy="44" r="2" fill="white"/>
            <circle cx="20" cy="32" r="2" fill="white"/>
            <circle cx="44" cy="32" r="2" fill="white"/>
        </g>
        <defs>
            <filter id="filter0_d_1_2" x="16" y="16" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape"/>
            </filter>
        </defs>
    </svg>
);

export default PlinkoIcon; 