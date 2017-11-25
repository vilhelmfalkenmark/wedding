import React from "react";
import RsvpContactUs from "./RsvpContactUs";
import { deleteCookie } from "utils/helpers/cookie";

const RsvpError = () => {
  deleteCookie();
  return (
    <div>
      <h1>Något verkade gå galet när du/ni skulle OSA.</h1>
      <h2>
        Obs! Det är inte dig/er det är fel på utan någon galen teknisk koppling.
      </h2>
      <RsvpContactUs
        message={
          "Du kan antingen ladda om sidan och försöka igen eller kontakta oss på uppgifter nedan så fixar vi det!"
        }
      />
    </div>
  );
};

export default RsvpError;
