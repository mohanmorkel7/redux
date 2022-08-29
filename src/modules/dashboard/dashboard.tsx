import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
// import './index.css'
export interface DashboardProps {
    // basicData:any;
}
export interface DashboardState {

}


class Dashboard extends React.Component<DashboardProps, DashboardState>{
    // class Dashboard extends React.Component<DashboardProps, DashboardState>{


        basicData:any;
        multiAxisData:any;
        lineStylesData:any;
        options:any;



    constructor(props:any) {
        super(props);

        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#FFA726',
                    tension: .4
                }
            ]
        };

        this.multiAxisData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Dataset 1',
                fill: false,
                borderColor: '#42A5F5',
                yAxisID: 'y',
                tension: .4,
                data: [65, 59, 80, 81, 56, 55, 10]
            }, {
                label: 'Dataset 2',
                fill: false,
                borderColor: '#00bb7e',
                yAxisID: 'y1',
                tension: .4,
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
        };

        this.lineStylesData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: .4,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    tension: .4,
                    borderColor: '#66BB6A'
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: '#FFA726',
                    tension: .4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };

        this.options = this.getLightTheme();
    }

    getLightTheme() {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        let multiAxisOptions = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions,
            multiAxisOptions
        }
    }








    // const [stackedData] = useState({
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [{
    //         type: 'bar',
    //         label: 'SNOOZED',
    //         backgroundColor: '#8862e0',
    //         data: [
    //             50,
    //             25,
    //             12,
    //             48,
    //             90,
    //             76,
    //             42
    //         ]
    //     }, {
    //         type: 'bar',
    //         label: 'COMPLETED',
    //         backgroundColor: '#2196f3',
    //         data: [
    //             21,
    //             84,
    //             24,
    //             75,
    //             37,
    //             65,
    //             34
    //         ]
    //     }, {
    //         type: 'bar',
    //         label: 'OVERDUE',
    //         backgroundColor: '#e7487e',
    //         data: [
    //             41,
    //             52,
    //             24,
    //             74,
    //             23,
    //             21,
    //             32
    //         ]
    //     }]
    // });

    // const [lineStylesData] = useState({
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [
    //         {
    //             label: 'First Dataset',
    //             data: [65, 59, 80, 81, 56, 55, 40],
    //             fill: false,
    //             tension: .4,
    //             borderColor: '#42A5F5'
    //         },
    //         {
    //             label: 'Second Dataset',
    //             data: [28, 48, 40, 19, 86, 27, 90],
    //             fill: false,
    //             borderDash: [5, 5],
    //             tension: .4,
    //             borderColor: '#66BB6A'
    //         },
    //         {
    //             label: 'Third Dataset',
    //             data: [12, 51, 62, 33, 21, 62, 45],
    //             fill: true,
    //             borderColor: '#FFA726',
    //             tension: .4,
    //             backgroundColor: 'rgba(255,167,38,0.2)'
    //         }
    //     ]
    // });


    // const getLightTheme = () => {
    //     let stackedOptions = {
    //         maintainAspectRatio: false,
    //         aspectRatio: .8,
    //         plugins: {
    //             tooltips: {
    //                 mode: 'index',
    //                 intersect: false
    //             },
    //             legend: {
    //                 labels: {
    //                     color: '#495057'
    //                 }
    //             }
    //         },
    //         scales: {
    //             x: {
    //                 stacked: true,
    //                 ticks: {
    //                     color: '#495057'
    //                 },
    //                 grid: {
    //                     color: '#ebedef'
    //                 }
    //             },
    //             y: {
    //                 stacked: true,
    //                 ticks: {
    //                     color: '#495057'
    //                 },
    //                 grid: {
    //                     color: '#ebedef'
    //                 }
    //             }
    //         }
    //     };
    //     let basicOptions = {
    //         maintainAspectRatio: false,
    //         aspectRatio: .6,
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     color: '#495057'
    //                 }
    //             }
    //         },
    //         scales: {
    //             x: {
    //                 ticks: {
    //                     color: '#495057'
    //                 },
    //                 grid: {
    //                     color: '#ebedef'
    //                 }
    //             },
    //             y: {
    //                 ticks: {
    //                     color: '#495057'
    //                 },
    //                 grid: {
    //                     color: '#ebedef'
    //                 }
    //             }
    //         }
    //     };
    //     return {
    //         stackedOptions,
    //         basicOptions
    //     }
    // }

    // const { stackedOptions, basicOptions } = getLightTheme();

    render() {
        const { basicOptions, multiAxisOptions } = this.options;
        return (
            <React.Fragment>
                <>
                    {/* <div className="card"> */}
                    {/* <h5>Dashboard</h5> */}
                    <div className="ugauge_row ugauge_main_card">
                        <div className="ugauge_col_size_25  ">
                            <div className="ugauge_card border_r_10_theme_clr ">
                                <div className="ugauge_row">
                                    <div className="ugauge_col_size_50">
                                    <i className="pi pi-users"></i>
                                    </div>
                                    <div className="ugauge_col_size_50">
                                        <h2>Customer</h2>
                                        <p>550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ugauge_col_size_25 ">
                        <div className="ugauge_card border_r_10_theme_clr">
                                <div className="ugauge_row">
                                    <div className="ugauge_col_size_50">
                                    <i className="pi pi-users"></i>
                                    </div>
                                    <div className="ugauge_col_size_50">
                                        <h2>Users</h2>
                                        <p>550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ugauge_col_size_25">
                        <div className="ugauge_card border_r_10_theme_clr">
                                <div className="ugauge_row">
                                    <div className="ugauge_col_size_50">
                                    <i className="pi pi-users"></i>
                                    </div>
                                    <div className="ugauge_col_size_50">
                                        <h2>Rating</h2>
                                        <p>550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ugauge_col_size_25">
                        <div className="ugauge_card border_r_10_theme_clr">
                                <div className="ugauge_row">
                                    <div className="ugauge_col_size_50">
                                    <i className="pi pi-users"></i>
                                    </div>
                                    <div className="ugauge_col_size_50">
                                        <h2>Users</h2>
                                        <p>550</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div>
                <div className="ugauge_row card">
                    <h5>Basic</h5>
                    <Chart type="line" data={this.basicData} options={basicOptions} />
                </div>

                <div className="card">
                    <h5>Multi Axis</h5>
                    <Chart type="line" data={this.multiAxisData} options={multiAxisOptions} />
                </div>

                <div className="card">
                    <h5>Line Styles</h5>
                    <Chart type="line" data={this.lineStylesData} options={basicOptions} />
                </div>
            </div>


                    {/* </div> */}

                </>
            </React.Fragment>
        )
    }
}

export default Dashboard;