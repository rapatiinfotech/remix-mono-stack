interface ImportMetaEnv {
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly MODE: string;
    // Add more environment variables as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

// Add SVG module declarations
declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.svg?react' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
