'use client'

import {useGetData} from "hooks/useGetData";
import CustomDataGrid from "components/dataGrid/CustomDataGrid";
import Grid from "@mui/material/Grid";
import {USER_COLUMN} from "@/data/user-col";

export default function Dashboard() {

    const users = useGetData('users', 'get-dashboard-user')
    return (
        <Grid container>
            <CustomDataGrid
                title={'Users'} columns={USER_COLUMN} isLoading={users?.isLoading} data={users?.data}
            />
        </Grid>
    );
}
