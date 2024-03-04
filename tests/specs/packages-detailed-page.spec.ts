import { test } from '@pagesetup';
import * as LoginPage from '../pages/anaconda.org/login-page';
import * as landing from '../pages/anaconda.org/landing-page';
import * as packages from '../pages/anaconda.org/package';

//=================================================== packages access dropdown testcase ========================================//

test.describe('packages @Regression', () => {
  test('Testing Access packages', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await packages.navigateToAllpackages();
    await packages.selectcheckbox();
    await packages.Publicaccess();
    await packages.selectcheckbox();
    await packages.Authenticaccess();
    await packages.selectcheckbox();
    await packages.Deletepkg();
    await packages.navigatetofilestab();
    await packages.navigatetoinstructiontab();
    await packages.navigatetohistorytab();
  });
});

//=================================================== packages delete testcase ========================================//

test.describe('packages @Regression', () => {
  test('Delete packages', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await packages.navigateToAllpackages();
    await packages.selectcheckbox();
    await packages.Deletepkg();
  });
});

//=================================================== packages filter testcase ========================================//

test.describe('packages @Regression', () => {
  test('Filter packages', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await packages.navigateToAllpackages();
    await packages.typefilter();
    await packages.pypifilter();
    await packages.typefilter();
    await packages.condafilter();
    await packages.typefilter();
    await packages.Rfilter();
  });
});
