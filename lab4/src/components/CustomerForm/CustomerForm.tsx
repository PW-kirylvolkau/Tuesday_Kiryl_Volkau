import React, {useState} from 'react';
import NameStep from "./NameStep/NameStep";
import AddressStep from "./AddressStep/AddressStep";
import SummaryStep from "./SummaryStep/SummaryStep";
import Address from "../../interfaces/address";

const emptyAddress: Address = {
    zip: '',
    street: '',
    city: ''
}

const CustomerForm: React.FC<unknown> = () => {
    // hooks for elements visibility
    const [address, setAddress] = useState<boolean>(false);
    const [summary, setSummary] = useState<boolean>(false);

    // hooks for the state (data submitted in input
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [deliveryAddress, setDeliveryAddress] = useState<Address>(emptyAddress);
    const [invoiceAddress, setInvoiceAddress] = useState<Address>(emptyAddress);

    const handleDeliveryChange = (fieldName: string, fieldValue: string) => {
        setDeliveryAddress(prevState => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }
    
    const handleInvoiceChange = (fieldName: string, fieldValue: string) => {
        setDeliveryAddress(prevState => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    return(
        <div>
            <NameStep
                onClicked={() => setAddress(true)}
                firstName={firstName}
                onNameChange={(name:string) => setFirstName(name)}
                lastName={lastName}
                onLastNameChange={(lastName:string) => setLastName(lastName)}
                email={email}
                onEmailChange={(email:string) => setEmail(email)}
                isSubmitted={address}
            />
            {address &&
                <AddressStep
                    onClicked={() => setSummary(true)}
                    deliveryAddress={deliveryAddress}
                    invoiceAddress={invoiceAddress}
                    isSubmitted={summary}
                    onBackClicked={() => setAddress(false)}
                    onDeliveryAddressChange={handleDeliveryChange}
                    onInvoiceAddressChange={handleInvoiceChange}/>

            }
            {summary && <SummaryStep
                firstName={firstName}
                lastName={lastName}
                email={email}
                deliveryAddress={deliveryAddress}
                invoiceAddress={invoiceAddress}
                onNameClicked={() => {
                    setAddress(false);
                    setSummary(false);
                }}
                onAddressClicked={() => setSummary(false)}
            />}
        </div>
    );
}

export default CustomerForm;
