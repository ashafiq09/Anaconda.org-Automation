// eslint-disable-next-line prettier/prettier
import {
  click,
  clickAndNavigate,
  expectElementToBeVisible,
  expectElementToHaveText,
  expectPageToHaveURL,
  fill,
} from 'vasu-playwright-utils';
import { ValidLogin } from '@testdata/anaconda.org-test-data';

const packgesviewall = "(//*[@class='right']//a[@class='text-white'])[1]";
const header = "(//strong[normalize-space()='packages'])[1]";
//const checkall = "#checkbox";
const filestablink = "(//a[normalize-space()='Files'])[1]";
const filestab = "//strong[normalize-space()='files']";
const installertablink = "//a[normalize-space()='Install Instructions']";
const installertab = "//strong[normalize-space()='installers']";
const historytablink = "//a[normalize-space()='History']";
const historytab = "//strong[normalize-space()='history']";
const checkbox = "(//*[@id='repo-packages-table']//input[@name='package'])[1]";
//const selectpkg = getLocatorByRole('row', { name: 'package' }).getByRole('checkbox');
const setaccess = "//a[normalize-space()='Set access']";
const accessDD = "//ul[@id='setAccess']";
const accesspublic = "//a[contains(text(),'Public')]";
const successmsg = "//div[@class='alert-box success']";
const acessauthentic = "(//a[contains(text(),'Authenticated')])[1]";
const deletebutton = "//a[normalize-space()='Delete']";
const deletepopup = "//h2[normalize-space()='Delete Packages?']";
const username = "//input[@id='confirm-username']";
const popupdeletebutton = "//button[normalize-space()='Delete packages']";
const deletenote = "//div[@id='messages']";
const typefilterclick = "//dd[@data-dropdown='Type']";
const typefilterDD = "//ul[@id='Type']";
const selectpypi = "//a[normalize-space()='Standard Python']";
const pypiURL = 'https://anaconda.org/aroojshafiq/repo?type=pypi';
const selectconda = "//a[normalize-space()='conda']";
const condaURL = 'https://anaconda.org/aroojshafiq/repo?type=conda';
const selectR = "//a[normalize-space()='Standard R']";
const RURL = 'https://anaconda.org/aroojshafiq/repo?type=r';
//const accessfilterclick = "//a[normalize-space()='Access: all']";
//const accessfilterDD = "//ul[@id='Access']";
//const selectpublic = "//a[@href='/aroojshafiq/repo?access=public']";
//const publicURL = 'https://anac';
//const selectauthentic = "//a[normalize-space()='conda']";
//const authURL = 'https://anaconda.org/aroojshafiq/repo?type=conda';
//const selectprivate = "//a[normalize-space()='Standard R']";
//const privateURL = 'https://anaconda.org/aroojshafiq/repo?type=r';

export async function navigateToAllpackages() {
  await clickAndNavigate(packgesviewall);
  await expectElementToHaveText(header, 'packages');
}

export async function navigatetofilestab() {
  await clickAndNavigate(filestablink);
  await expectElementToHaveText(filestab, 'files');
}

export async function navigatetoinstructiontab() {
  await clickAndNavigate(installertablink);
  await expectElementToHaveText(installertab, 'installers');
}

export async function navigatetohistorytab() {
  await clickAndNavigate(historytablink);
  await expectElementToHaveText(historytab, 'history');
}

export async function selectcheckbox() {
  await click(checkbox);
  await click(setaccess);
  await expectElementToBeVisible(accessDD);
}

export async function Publicaccess() {
  await click(accesspublic);
  await expectElementToBeVisible(successmsg);
}

export async function Authenticaccess() {
  await click(acessauthentic);
}

export async function Deletepkg(validCredentials = ValidLogin) {
  await click(deletebutton);
  await expectElementToBeVisible(deletepopup);
  await click(username);
  await fill(username, validCredentials.username);
  await click(popupdeletebutton);
  await expectElementToBeVisible(deletenote);
}

export async function typefilter() {
  await click(typefilterclick);
  await expectElementToBeVisible(typefilterDD);
}

export async function pypifilter() {
  await click(selectpypi);
  await expectPageToHaveURL(pypiURL);
}

export async function condafilter() {
  await click(selectconda);
  await expectPageToHaveURL(condaURL);
}

export async function Rfilter() {
  await click(selectR);
  await expectPageToHaveURL(RURL);
}
