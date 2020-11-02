import React, {useState} from 'react';
import Address from "../../../interfaces/address";

interface AddressStepProps {
    onClicked: () => void;
    onBackClicked: () => void;
    isSubmitted: boolean;
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
        <div className={`card m-3 ${props.isSubmitted ? 'bg-light text-secondary' : ''}`}>
            <div className="card-header">
                <h3>Address step</h3>
            </div>
            <div className="card-body">
                <div className="card m-3">
                    <div className={"card-body" + (props.isSubmitted ? " bg-light" : "")}>
                        <div className="card-title">
                            <h5>Delivery address</h5>
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-sm-3 my-1">
                                <input
                                    type="text"
                                    value={props.deliveryAddress.city}
                                    className="form-control"
                                    placeholder="City"
                                    onChange={(e)=>selectAddressChange('city', e.target.value)}
                                    disabled={props.isSubmitted}
                                />
                                {!isDeliveryCityValid() && <small className="text-danger">Enter delivery city.</small>}
                            </div>
                            <div className="col-sm-3 my-1">
                                <input
                                    type="text"
                                    value={props.deliveryAddress.street}
                                    className="form-control"
                                    placeholder="Street"
                                    onChange={(e)=>selectAddressChange('street', e.target.value)}
                                    disabled={props.isSubmitted}
                                /> {!isDeliveryStreetValid() && <small className="text-danger">Enter delivery street.</small>}
                            </div>
                            <div className="col-sm-2 my-1">
                                <input
                                    type="text"
                                    value={props.deliveryAddress.zip}
                                    placeholder="Zip"
                                    className="form-control"
                                    onChange={(e)=>selectAddressChange('zip', e.target.value)}
                                    disabled={props.isSubmitted}
                                    pattern={zipRegex.source}
                                /> {!isDeliveryZipValid() && <small className="text-danger">Enter valid ZIP code.</small>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-check m-3">
                    <input
                        id="address"
                        type="checkbox"
                        className="form-check-input"
                        onChange={()=>onCheckBoxClick()}
                        disabled={props.isSubmitted}
                    />
                    <label
                        htmlFor="address"
                        className="form-check-label"
                    >
                        Invoice address is similar to the delivery address
                    </label>
                </div>
                <div className={'card m-3' + (similarAddress ? ' text-secondary' : '')}>
                    <div className={`card-body ${similarAddress || props.isSubmitted ? 'bg-light' : ''}`}>
                        <div className="title">
                            <h5>Invoice address</h5>
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-sm-3 my-1">
                                <input
                                    type="text"
                                    value={props.invoiceAddress.city}
                                    placeholder="City"
                                    className="form-control"
                                    onChange={(e)=>props.onInvoiceAddressChange('city', e.target.value)}
                                    disabled={similarAddress}
                                /> {!isInvoiceCityValid() && <small className="text-danger">Enter invoice city.</small>}
                            </div>
                            <div className="col-sm-3 my-1">
                                <input
                                    type="text"
                                    value={props.invoiceAddress.street}
                                    placeholder="Street"
                                    className="form-control"
                                    onChange={(e)=>props.onInvoiceAddressChange('street', e.target.value)}
                                    disabled={similarAddress}
                                /> {!isInvoiceStreetValid() && <small className="text-danger">Enter invoice street.</small>}
                            </div>
                            <div className="col-sm-2 my-1">
                                <input
                                    type="text"
                                    value={props.invoiceAddress.zip}
                                    placeholder="Zip"
                                    className="form-control"
                                    onChange={(e)=>props.onInvoiceAddressChange('zip', e.target.value)}
                                    disabled={similarAddress}
                                    pattern={zipRegex.source}
                                /> {!isInvoiceZipValid() && <small className="text-danger">Enter valid zip.</small>}
                            </div>
                        </div>
                    </div>
                    </div>
                <button
                    onClick={() => props.onClicked()}
                    disabled={!isValid() || props.isSubmitted}
                    className="btn btn-primary col-sm-3 mr-1 mb-1"
                >
                    Next
                </button>
                <button
                    disabled={props.isSubmitted}
                    onClick={() => props.onBackClicked()}
                    className="btn btn-danger col-sm-3 mb-1"
                >
                    Back
                </button>
                </div>
        </div>
    );
}

export default AddressStep;
