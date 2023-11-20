import { LayoutsPage } from '../pages/layoutsPage';
import { StepperPage } from '../pages/stepperPage';
import { ModalDialogPage } from '../pages/modalDialogPage';
import { RegistrationPage } from '../pages/registrationPage';
import { TablePage } from '../pages/tablePage';

const layoutsPage = new LayoutsPage();
const stepperPage = new StepperPage();
const modalDialogPage = new ModalDialogPage();
const registrationPage = new RegistrationPage();
const tablePage = new TablePage();

export function navigateToLayoutsPage() {
  layoutsPage.visitLayoutsPage();
}

export function navigateToStepperPage() {
  stepperPage.visitStepperPage();
}

export function navigateToModalDialogPage() {
  modalDialogPage.visitModalDialogPage();
}

export function navigateToRegistrationPage() {
  registrationPage.visitRegistrationPage();
}

export function navigateToSmartTablePage() {
  tablePage.visitSmartTablePage();
}
