/* eslint-disable prettier/prettier */
import {
  click,
  clickAndNavigate,
  closePage,
  expectElementToBeHidden,
  expectElementToBeVisible,
  expectElementToHaveText,
  goBack,
  switchPage,
  switchToDefaultPage,
  waitForElementToBeStable,
} from 'vasu-playwright-utils';

const dashboard = "//h2[normalize-space()='My Anaconda Landscape']";
const view = "//label[@data-toggle-submenu='view']/..";
//const view = "label[data-toggle-submenu='view']";
const landscape = "//a[normalize-space()='Landscape']";
const favorites = "//a[contains(text(),'Favorites')]";
const favoritesText = "(//strong[normalize-space()='favorites'])[1]";
const packages = "//a[@class='v2-link v2-nav-item'][normalize-space()='Packages']";
const packageText = "//strong[normalize-space()='packages']";
const notebook = "//a[normalize-space()='Notebooks']";
const notebooText = "//strong[normalize-space()='notebooks']";
const environments = "//a[normalize-space()='Environments']";
const environmentsText = "//strong[normalize-space()='environments']";
const projects = "//a[normalize-space()='Projects']";
const projectText = "//strong[normalize-space()='projects']";
//help dropdown
const help = "//label[normalize-space()='Help']";
const viewDocs = "//a[normalize-space()='View Docs']";
const ReportBug = "//a[normalize-space()='Report a bug']";
//profile dropdown
const usermenu = "//label[@data-toggle-submenu='profile']";
const switchto = "//label[contains(text(),'Switch to …')]";
const orglink = "(//*[@data-submenu-item='organizations']//a[@class='v2-link v2-nav-item'])[3]";
const neworg = "//a[normalize-space()='New Organization']";
const neworgtext = "//h1[normalize-space()='Why Organizations?']";
const profile = "//a[normalize-space()='Profile']";
const profiletext = "//div[normalize-space()='Profile']";
const setting = "//a[normalize-space()='Settings']";
const settingtext = "//div[@class='title']";
const groups = "//a[normalize-space()='Groups']";
//const groupstext = "//body[1]/div[2]/div[2]/div[1]/div[1]/div[1]/h2[1]";
const labels = "//a[normalize-space()='Labels']";
const labelstext = "//h2[normalize-space()='Labels']";
const logoutbutton = "//a[normalize-space()='Log out']";
const signin = "//a[normalize-space()='Sign In']";

export async function verifyDashboard() {
  await expectElementToBeVisible(dashboard, { timeout: 50000 });
}

export async function verifyDashboardIsNotDisplayed() {
  await expectElementToBeHidden(dashboard);
}
//=================================================== view dropdown testcase ========================================//

export async function verifyViewDropdown() {
  await waitForElementToBeStable(view);
  await click(view);
  await clickAndNavigate(landscape);
  await expectElementToHaveText(dashboard, 'My Anaconda Landscape');

  await waitForElementToBeStable(view);
  await click(view);
  await clickAndNavigate(favorites);
  await expectElementToHaveText(favoritesText, 'favorites');

  await waitForElementToBeStable(view);
  await click(view);
  await clickAndNavigate(packages);
  await expectElementToHaveText(packageText, 'packages');

  await waitForElementToBeStable(view);
  await click(view);
  await clickAndNavigate(notebook);
  await expectElementToHaveText(notebooText, 'notebooks');

  await waitForElementToBeStable(view);
  await click(view);
  await clickAndNavigate(environments);
  await expectElementToHaveText(environmentsText, 'environments');

  await waitForElementToBeStable(view);
  await click(view);
  await clickAndNavigate(projects);
  await expectElementToHaveText(projectText, 'projects');
}
//=================================================== help dropdown testcase ========================================//

export async function verifyHelpDropdown() {
  await waitForElementToBeStable(help);
  await click(help);
  await click(viewDocs);
  await switchPage(2);
  await closePage();
  await switchToDefaultPage();
  await expectElementToHaveText(dashboard, 'My Anaconda Landscape');

  await waitForElementToBeStable(help);
  await click(help);
  await clickAndNavigate(ReportBug);
  await goBack();
  await expectElementToHaveText(dashboard, 'My Anaconda Landscape');
}
//=================================================== profile dropdown testcase ========================================//

export async function usermenuDropdown() {
  await waitForElementToBeStable(usermenu);
  await click(usermenu, { timeout: 50000 });
  await click(switchto, { timeout: 50000 });
  await clickAndNavigate(orglink);
  await goBack();

  await waitForElementToBeStable(usermenu);
  await click(usermenu, { timeout: 50000 });
  await clickAndNavigate(neworg);
  await expectElementToHaveText(neworgtext, 'Why Organizations?');
  await goBack();

  await waitForElementToBeStable(usermenu);
  await click(usermenu, { timeout: 50000 });
  await clickAndNavigate(profile);
  await expectElementToHaveText(profiletext, 'Profile');

  await waitForElementToBeStable(usermenu);
  await click(usermenu, { timeout: 50000 });
  await clickAndNavigate(setting);
  await expectElementToHaveText(settingtext, 'Public Profile');

  await waitForElementToBeStable(usermenu);
  await click(usermenu, { timeout: 50000 });
  await clickAndNavigate(groups, { timeout: 50000 });
  await goBack();

  await waitForElementToBeStable(usermenu);
  await click(usermenu, { timeout: 50000 });
  await clickAndNavigate(labels);
  await expectElementToHaveText(labelstext, 'Labels');
}
//=================================================== Logout testcase ========================================//

export async function logout() {
  await waitForElementToBeStable(usermenu);
  await click(usermenu, { timeout: 50000 });
  await click(logoutbutton);
  await expectElementToHaveText(signin, 'Sign In');
}
