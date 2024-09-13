import React, { useEffect } from 'react';

const Form = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://zcsub-cmpzourl.maillist-manage.com/js/optin.min.js";
        script.async = true;
        script.onload = () => {
          window.setupSF(
            "sf3ze94e704457ec0f52e07d7890ca625aedafc5b8ff48aff9fdf31c7c799a4f3129",
            "ZCFORMVIEW",
            false,
            "light",
            false,
            "0"
          );
        };
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);
    
    return (
    
        <div className="subscribe-container">
            <form
                method="POST"
                id="zcampaignOptinForm"
                className="subscribe-form"
                action="https://zcsub-cmpzourl.maillist-manage.com/weboptin.zc"
                target="_zcSignup"
            >
                <div className="input-container">
                    <input
                        type="text"
                        className="xl:w-[350px] md:w-[250px] w-full p-4 outline-none bg-white"
                        placeholder="Enter email address"
                        name="CONTACT_EMAIL"
                        id="EMBED_FORM_EMAIL_LABEL"
                    />
                    <input
                        type="submit"
                        className="submit-button"
                        value="Subscribe"
                    />
                </div>
                <input type="hidden" id="fieldBorder" value="" />
                <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                <input type="hidden" id="formType" name="formType" value="QuickForm" />
                <input type="hidden" name="zx" id="cmpZuid" value="1333b49e6" />
                <input type="hidden" name="zcvers" value="3.0" />
                <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                <input type="hidden" id="zcld" name="zcld" value="112a0bf46db0c690d" />
                <input type="hidden" id="zctd" name="zctd" value="112a0bf46db0c67a9" />
                <input type="hidden" id="document_domain" value="" />
                <input type="hidden" id="zc_Url" value="zcsub-cmpzourl.maillist-manage.com" />
                <input type="hidden" id="new_optin_response_in" value="0" />
                <input type="hidden" id="duplicate_optin_response_in" value="0" />
                <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                <input type="hidden" id="zc_formIx" name="zc_formIx" value="3ze94e704457ec0f52e07d7890ca625aedafc5b8ff48aff9fdf31c7c799a4f3129" />
                <input type="hidden" id="viewFrom" value="URL_ACTION" />
            </form>
        </div>
    );
};

export default Form;
