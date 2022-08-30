import React from 'react';
import { classNames } from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { projectDetailsProps } from './projectDetails-interface';
import { Button } from 'primereact/button';
class ProjectDetailComponent extends React.Component<projectDetailsProps, any> {
    emptyProject = {
        id: null,
        projectName: '',
        description: '',
        price: 0,
    };
    constructor(props: projectDetailsProps) {
        super(props);
        this.state = {
            projects: null,
            projectDialog: false,
            project: this.emptyProject,
            submitted: false,
            globalFilter: null
        };
        this.openNew = this.openNew.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputNumberChange = this.onInputNumberChange.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
    }
    onInputChange(e: any, name: any) {
        const val = (e.target && e.target.value) || '';
        let project = { ...this.state.project };
        project[`${name}`] = val;

        this.setState({ project });
        console.log('project', project);

    }
    onInputNumberChange(e:any, name:any) {
        const val = e.value || 0;
        let project = {...this.state.project};
        project[`${name}`] = val;

        this.setState({ project });
        console.log('project', project);
    }
    openNew() {
        this.setState({
            project: this.emptyProject,
            submitted: false,
            projectDialog: true
        });
    }
     hideDialog() {
        // this.setState({
        //     projectDialog: false
        // });
    }
     projectDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={()=>this.setState({projectDialog:false})} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={
                ()=>{
                    alert('Project Name: '+this.state.project.projectName+'Project Decrition: '+this.state.project.description+'Project Price: '+this.state.project.price)
                console.log('Project Details ======>',this.state.project);
                }
            } />
        </React.Fragment>
    );
    componentDidMount() {
        this.props.getProjectDetailsData();
    }

    render() {
        const projectComponentData = this.props.projectList;
        const header = (
            <div className="table-header">
                <div className=''>
                <h3 className='card_tittle ugauge_col_size_50 text-left'>Project Details</h3>
                </div>
                <div className='text_right'>
                <Button icon="pi pi-plus" onClick={this.openNew} />
                </div>
                
              
            </div>
        );
        return (
            <>
                <Dialog visible={this.state.projectDialog} style={{ width: '450px' }} header="Project Details" modal className="p-fluid" footer={this.projectDialogFooter} onHide={this.hideDialog}>
                    <div className="field">
                        <label htmlFor="projectName">Name of the Project</label>
                        <InputText id="projectName" value={this.state.project.projectName} onChange={(e) => this.onInputChange(e, 'projectName')} required autoFocus className={classNames({ 'p-invalid': this.state.submitted && !this.state.project.projectName })} />
                        {this.state.submitted && !this.state.project.projectName && <small className="p-error">Project Name is required.</small>}
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <InputTextarea id="description" value={this.state.project.description} onChange={(e) => this.onInputChange(e, 'description')} required rows={3} cols={20} />
                    </div>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="price">Price</label>
                            <InputNumber id="price" value={this.state.project.price} onValueChange={(e) => this.onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                        </div>
                    </div>
                </Dialog>
                <div className='p_all_20'>
                    <div className="card ">
                        <DataTable
                            value={projectComponentData} paginator rows={10} header={header} selectionMode="single" dataKey="id" responsiveLayout="scroll" stateStorage="session" stateKey="dt-state-demo-session" emptyMessage="No User Details found." >
                            <Column field="projectName" header="Project Name" sortable filter filterPlaceholder="Search by Project Name"></Column>
                            <Column field="marketPrice" header="Market Price" sortable filter filterPlaceholder="Search by Market Price"></Column>
                            <Column field="projectId" header="Project Id" sortable filter filterPlaceholder="Search by Project Id"></Column>
                        </DataTable>
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectDetailComponent;