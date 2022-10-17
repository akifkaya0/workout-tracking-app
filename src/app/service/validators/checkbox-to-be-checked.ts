import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export class CheckboxToBeChecked {

  static requireCheckboxesToBeCheckedValidator(formGroup: AbstractControl) {

    let checked = 0;

    Object.values(formGroup.value).forEach(value => {
      if (value) {
        checked++;
      }
    });

    if (checked < 1) {
      return {
        requireCheckboxesToBeChecked: true,
      };
    }
    return null;

  }
}
