import React, {useState} from 'react';
import NameStep from "./NameStep/NameStep";
import AddressStep from "./AddressStep/AddressStep";
import SummaryStep from "./SummaryStep/SummaryStep";

const CustomerForm: React.FC<unknown> = () => {
    // hooks for elements visibility
    const [address, setAddress] = useState<boolean>(false);
    const [summary, setSummary] = useState<boolean>(false);

    // hooks for the state (data submitted in input
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');


    return(
        <div>
            <p>Customer form.</p>
            <NameStep
                onClicked={() => setAddress(true)}
                firstName={firstName}
                onNameChange={(name:string) => setFirstName(name)}
                lastName={lastName}
            />
            {address && <AddressStep onClicked={() => setSummary(true)}/>}
            {summary && <SummaryStep />}
        </div>
    );
}

export default CustomerForm;
