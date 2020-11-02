import React from 'react';
import Address from "../../../interfaces/address";

interface SummaryProps {
    firstName: string;
    lastName: string;
    email: string;
    invoiceAddress: Address;
    deliveryAddress: Address;
    onAddressClicked: () => void;
    onNameClicked: () => void;
}

const SummaryStep: React.FC<SummaryProps> = (props) => {

    function getAddressHTML(addressType: string): string {
        //let html: string = `<p>${addressType.charAt(0).toUpperCase() + addressType.slice(1)} address</p>` ;
        let html: string = '';
        for(const [key, value] of Object.entries(props[`${addressType}Address` as keyof SummaryProps])){
            html+=`<p><b>${key.toUpperCase()}</b>: ${value}</p>`;
        }
        return html;
    }
    return(
        <div className="card m-3">
            <div className="card-header">
               <h3>Summary step</h3>
            </div>
            <div className="card-body">
                <div className="card-title"><h4>Name step</h4></div>
                <div className="row">
                    <div className="col-sm-1">
                        <span className="badge badge-secondary">First name</span> <br/>
                        <span className="badge badge-secondary">Last name</span> <br/>
                        <span className="badge badge-secondary">Email</span>
                    </div>
                    <div className="col-sm-4">
                        <div> {props.firstName}</div>
                        <div>{props.lastName}</div>
                        <div>{props.email}</div>
                    </div>
                </div>
                <hr/>
                <div className="card-title"><h5>Address step</h5></div>
                <div className="card mb-2">
                    <div className="card-header">
                        <h6>Delivery address</h6>
                    </div>
                    <div className="card-body">
                        <div dangerouslySetInnerHTML={{__html: getAddressHTML('delivery')}}/>
                    </div>
                </div>
                <div className="card mb-1">
                    <div className="card-header">
                        <h6>Invoice address</h6>
                    </div>
                    <div className="card-body">
                        <div dangerouslySetInnerHTML={{__html: getAddressHTML('invoice')}}/>
                    </div>
                </div>

                <button
                    onClick={() => props.onAddressClicked()}
                    className="btn btn-primary mr-1 col-sm-3"
                >
                    Go to address step
                </button>
                <button
                    onClick={() => props.onNameClicked()}
                    className="btn btn-primary col-sm-3"
                >
                    Go to name step
                </button>
            </div>
        </div>
    );
}

export default SummaryStep;
