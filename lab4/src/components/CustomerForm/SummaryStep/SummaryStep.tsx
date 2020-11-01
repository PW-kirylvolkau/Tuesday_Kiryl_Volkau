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
        let html: string = `<p>${addressType.toUpperCase()} address</p>` ;
        for(const [key, value] of Object.entries(props[`${addressType}Address` as keyof SummaryProps])){
            html+=`<p>${key.toUpperCase()}: ${value}</p>`;
        }
        return html;
    }
    return(
        <div>
            <p>Name: {props.firstName}</p>
            <p>Surname: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <hr/>
            <div dangerouslySetInnerHTML={{__html: getAddressHTML('delivery')}}/>
            <div dangerouslySetInnerHTML={{__html: getAddressHTML('invoice')}}/>
            <button onClick={() => props.onAddressClicked()}>Go to address step.</button>
            <button onClick={() => props.onNameClicked()}>Go to name step.</button>
        </div>
    );
}

export default SummaryStep;
