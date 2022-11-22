import React from "react";
import '@testing-library/jest-dom'
import {distributorStore} from "../../../stores/DistributorStore";

test('Test if store returns a defined list', () => {
 expect(distributorStore.distributors).toBeDefined();
});
