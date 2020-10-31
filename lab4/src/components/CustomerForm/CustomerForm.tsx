import React, {useState} from 'react';
import NameStep from "./NameStep/NameStep";
import AddressStep from "./AddressStep/AddressStep";
import SummaryStep from "./SummaryStep/SummaryStep";

const CustomerForm: React.FC<unknown> = () => {
    const [address, setAddress] = useState<boolean>(false);
    const [summary, setSummary] = useState<boolean>(false);

    return(
        <div>
            <p>Customer form.</p>
            <NameStep onClicked={() => setAddress(true)}/>
            {address && <AddressStep onClicked={() => setSummary(true)}/>}
            {summary && <SummaryStep />}
        </div>
    );
}

export default CustomerForm;
