import React from 'react';
import { rateProps } from './rate-interface';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

class Rate extends React.Component<rateProps>{

    componentDidMount() {
        this.props.getAllRateAction();
    }
    render() {
        let rateData = this.props.rateDataList;
        console.log('rateData',this.props.rateDataList);
        const header = (
            <div className="table-header">
                <h3 className='card_tittle ugauge_col_size_50 text-left'>Rate Detatails</h3>
                <Button icon="pi pi-plus" />
                <Button icon="pi pi-pencil" />
                <Button icon="pi pi-trash" />
            </div>
        );
        return (

            <>
                <div className='p_all_20'>
                    <div className="card ">
                        <DataTable
                            value={rateData} paginator rows={10} header={header} selectionMode="single" dataKey="id" responsiveLayout="scroll" stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No User Details found." >
                            <Column field="geography" header="Geography" sortable filter filterPlaceholder="Search by name"></Column>
                            <Column field="nicheSkill" header="Niche Skill" sortable filter filterPlaceholder="Search by Email"></Column>
                            <Column field="experience" header="Experience" sortable filter filterPlaceholder="Search by Primary Skills"></Column>
                            <Column field="grade" header="Grade" sortable filter filterPlaceholder="Search by Secondary Skills"></Column>
                            <Column field="maxCtc" header="Max CTC" sortable filter filterPlaceholder="Search by Total Experience"></Column>
                        </DataTable>
                    </div>
                </div>
            </>
        )
    }

}

export default Rate;