import '@mui/material/Typography';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        save: true;
        cancel: true;
        confirm: true;
        dismiss: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        dashboardH2: true;
        dashboardSubtitle: true;
        dashboardBody: true;
        dashboardCaption: true;
        dashboardButton: true;
    }
}

