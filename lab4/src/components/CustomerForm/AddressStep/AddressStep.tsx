import React, {useState} from 'react';
import Address from "../../../interfaces/address";

interface AddressStepProps {
    onClicked: () => void;
    invoiceAddress: Address;
    deliveryAddress: Address;
    onDeliveryAddressChange: (fieldName: string, fieldValue: string) => void;
    onInvoiceAddressChange: (fieldName: string, fieldValue: string) => void;
}

const AddressStep: React.FC<AddressStepProps> = (props) => {
    const zipRegex = /^(\d\d)-(\d\d\d)$/
    const [similarAddress, setSimilarAddress] = useState<boolean>(false);

    /* validators. Probably not the most optimal solution, it would be easier here if I used vanilla js, however,
     I use ts and it is pretty strict about object field values. */
    const isDeliveryStreetValid = () => !(props.deliveryAddress.street === '');
    const isDeliveryCityValid = () => !(props.deliveryAddress.city === '');
    const isDeliveryZipValid = () => {
        const isEmpty = !(props.deliveryAddress.zip === '');
        const isValid = zipRegex.test(props.deliveryAddress.zip);
        return isEmpty && isValid;
    }

    const isInvoiceStreetValid = () => !(props.invoiceAddress.street === '');
    const isInvoiceCityValid = () => !(props.invoiceAddress.city === '');
    const isInvoiceZipValid = () => {
        const isEmpty = !(props.invoiceAddress.zip === '');
        const isValid = zipRegex.test(props.invoiceAddress.zip);
        return isEmpty && isValid;
    }

    const isValid = () => {
       const isDeliveryValid = isDeliveryZipValid() && isDeliveryZipValid() && isDeliveryCityValid();
       const isInvoiceValid = isInvoiceStreetValid() && isInvoiceCityValid() && isInvoiceZipValid();
       return isDeliveryValid && isInvoiceValid;
    }


    const onCheckBoxClick = () => {
        if(!similarAddress){
            Object.assign(props.invoiceAddress, props.deliveryAddress);
        }
        setSimilarAddress(!similarAddress);
    }

    const selectAddressChange = (fieldName: string, fieldValue: string) => {
        if(similarAddress){
            props.onInvoiceAddressChange(fieldName, fieldValue);
            props.onDeliveryAddressChange(fieldName, fieldValue);
        }
        props.onDeliveryAddressChange(fieldName, fieldValue);
    }


    return(
        <div>
            <div>
                <p>Delivery address</p>
                <div>
                    <p>ZIP: {props.deliveryAddress.zip}</p>
                    <p>CITY: {props.deliveryAddress.city}</p>
                    <p>STREET: {props.deliveryAddress.street}</p>
                </div>
                <input
                    type="text"
                    value={props.deliveryAddress.city}
                    placeholder="City"
                    onChange={(e)=>selectAddressChange('city', e.target.value)}
                /> {!isDeliveryCityValid() && <span>Enter delivery city.</span>}
                <input
                    type="text"
                    value={props.deliveryAddress.street}
                    placeholder="Street"
                    onChange={(e)=>selectAddressChange('street', e.target.value)}
                /> {!isDeliveryStreetValid() && <span>Enter delivery street.</span>}
                <input
                    type="text"
                    value={props.deliveryAddress.zip}
                    placeholder="Zip"
                    onChange={(e)=>selectAddressChange('zip', e.target.value)}
                    pattern={zipRegex.source}
                /> {!isDeliveryZipValid() && <span>Enter delivery zip.</span>}
            </div>
            <label htmlFor="address">Invoice address is similar to the delivery address</label>
            <input
                type="checkbox"
                id="address"
                onChange={()=>onCheckBoxClick()}
            />
            <div>
                <p>ZIP: {props.invoiceAddress.zip}</p>
                <p>CITY: {props.invoiceAddress.city}</p>
                <p>STREET: {props.invoiceAddress.street}</p>
            </div>
            <div>
                <p>Invoice address</p>
                <input
                    type="text"
                    value={props.invoiceAddress.city}
                    placeholder="City"
                    onChange={(e)=>props.onInvoiceAddressChange('city', e.target.value)}
                    disabled={similarAddress}
                /> {!isInvoiceCityValid() && <span>Enter delivery city.</span>}
                <input
                    type="text"
                    value={props.invoiceAddress.street}
                    placeholder="Street"
                    onChange={(e)=>props.onInvoiceAddressChange('street', e.target.value)}
                    disabled={similarAddress}
                /> {!isInvoiceStreetValid() && <span>Enter delivery street.</span>}
                <input
                    type="text"
                    value={props.invoiceAddress.zip}
                    placeholder="Zip"
                    onChange={(e)=>props.onInvoiceAddressChange('zip', e.target.value)}
                    disabled={similarAddress}
                    pattern={zipRegex.source}
                /> {!isDeliveryCityValid() && <span>Enter a delivery zip.</span>}
            </div>
            <button
                onClick={() => props.onClicked()}
                disabled={!isValid()}
            >
                Next
            </button>
        </div>
    );
}

export default AddressStep;
