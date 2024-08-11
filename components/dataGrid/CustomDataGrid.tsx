'use client'

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StyledTextField from "components/inputs/StyledTextField";
import Pagination from '@mui/material/Pagination';
import {ChangeEvent, useMemo, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import searchInObject from "utils/searchInObject";
import Highlighted from "components/common/Highlighted";
import SortIcon from '@mui/icons-material/Sort';
import InfoDialog from "components/Dialogs/InfoDialog";
import {handleRequestWithDelay} from "utils/handleRequestWithDelay";

export type TColumns = {
    field: string
    headerName: string
    minWidth?: number | string
    flex?: number
    renderCell?: (params: any) => any
    renderHeader?: (params: any) => any
}

interface ICustomDataGrid {
    title?: string
    columns: TColumns[]
    data?: any,
    isLoading?: boolean
    totalDataInOnePage?: number,
}

const CustomDataGrid = ({title, columns, data, isLoading, totalDataInOnePage = 5}: ICustomDataGrid) => {

    const [page, setPage] = useState<number>(1);
    const [searchField, setSearchField] = useState<string | null>(null);
    const [sortField, setSortField] = useState<string | null>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<Record<any, any> | null>(null)
    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
    };

    const searchOnChange = (event: ChangeEvent<unknown>) => {
        handleRequestWithDelay(() => {
            setSearchField(event?.target?.['value'])
        })
    };

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const onRowClick = (item: Record<any, any>) => {
        setSelectedValue(item)
        setOpenDialog(true)
    }

    const resultData = useMemo(() => {
        setPage(1)
        if (searchField !== null && searchField.length !== 0)
            if (!!sortField)
                return data?.filter(item => searchInObject(item, searchField, ['name', 'email']))?.sort((a: Record<any, any>, b: Record<any, any>) => a?.[sortField]?.localeCompare(b?.[sortField]))
            else
                return data?.filter(item => searchInObject(item, searchField, ['name', 'email']))
        else if (!!sortField)
            return data?.sort((a: Record<any, any>, b: Record<any, any>) => a?.[sortField]?.localeCompare(b?.[sortField]))
        else
            return data
    }, [searchField, sortField, data])

    return (
        <Grid container justifyContent={'center'} alignItems={'center'}
              sx={{
                  borderRadius: 2, borderWidth: 1, borderColor: 'border', borderStyle: 'solid',
              }}
        >
            <Grid container justifyContent={'space-between'} alignItems={'center'}
                  sx={{p: 1}}>
                <Typography variant={'dashboardH2'} sx={{mr: 2}}>
                    {title}
                </Typography>
                <Grid item sm={3} xs>
                    <StyledTextField
                        placeholder={'Search in Name , Email'}
                        onChange={searchOnChange}
                    />
                </Grid>
            </Grid>
            <Grid container justifyContent={'center'} sx={{overflow: 'auto'}}>
                <Grid container justifyContent={'center'} wrap="nowrap">
                    {columns.map((item: TColumns, index: number) => {
                        return (
                            <Grid
                                onClick={() => setSortField(prevState => {
                                    if (prevState === item.field)
                                        return null
                                    else
                                        return item.field
                                })}
                                key={`columns${index}`}
                                container
                                item
                                xs
                                justifyContent={"center"}
                                alignItems={"center"}
                                sx={{
                                    minWidth: item.minWidth,
                                    bgcolor: 'main',
                                    borderLeft: index === 0 ? 0 : 1,
                                    borderColor: "border",
                                    color: 'white.0',
                                    userSelect: 'none',
                                    p: 1,
                                    transition: 'all 0.2s ease-in-out',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: 'mainHover',
                                    }
                                }}
                            >
                                <Typography
                                    variant={'dashboardSubtitle'}
                                >
                                    {item.headerName}
                                </Typography>

                                {sortField === item.field &&
                                    <SortIcon sx={{fontSize: '1.000rem'}}/>
                                }

                            </Grid>
                        );
                    })}
                </Grid>

                {!!data &&
                    <Grid container justifyContent={'space-between'}>
                        {resultData?.slice(totalDataInOnePage * (page - 1), totalDataInOnePage * page)?.map((singleData: Record<any, any>, index: number) => {
                            return (
                                <Grid
                                    key={`data${index}`}
                                    container
                                    wrap="nowrap"
                                    onClick={() => onRowClick(singleData)}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: "border",
                                        color: 'black.0',
                                        transition: 'all 0.2s ease-in-out',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            bgcolor: 'gray.0'
                                        },
                                    }}
                                >
                                    {columns.map((column: TColumns, index: number) => {
                                        return (
                                            <Grid
                                                key={`dataColumn${index}`}
                                                container item xs justifyContent={'center'} alignItems={'center'} sx={{
                                                borderColor: 'border',
                                                borderLeft: index === 0 ? 0 : 1,
                                                minWidth: column.minWidth,
                                                height: 1,
                                                p: 1,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: '1',
                                                WebkitBoxOrient: 'vertical',
                                            }}>
                                                <Typography
                                                    variant={'dashboardBody'}
                                                >
                                                    <Highlighted highlight={searchField}
                                                                 text={singleData[column.field]}/>
                                                </Typography>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            );
                        })}
                    </Grid>
                }

            </Grid>
            {(resultData?.length === 0 || !data) &&
                <Grid container justifyContent={'center'} alignItems={'center'} sx={{p: 3}}>
                    {!!isLoading ?
                        <CircularProgress color="success"/>
                        :
                        <Typography variant={'dashboardCaption'}>
                            No Data To Display
                        </Typography>
                    }
                </Grid>
            }

            {(!!data && resultData?.length !== 0) &&
                <Grid container justifyContent={'center'} alignItems={'center'} sx={{height: 50}}>
                    <Pagination
                        count={Math.round((Number(resultData?.length) / totalDataInOnePage)) === 0 ? 1 : Math.round((Number(resultData?.length) / totalDataInOnePage))}
                        page={page}
                        onChange={handleChange}/>
                </Grid>
            }

            {!!openDialog &&
                <InfoDialog open={openDialog} data={selectedValue} handleClose={handleCloseDialog}/>
            }

        </Grid>
    )
}

export default CustomDataGrid