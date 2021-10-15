// import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AuthorizedRoute from "./lib/AuthorizedRoute";
import RestrictedWrapper from "./lib/RestrictedWrapper";
import { AuthorizedContextProvider } from "./lib/AuthorizedContext";

import Paper from "@mui/material/Paper";
import UkBeranda from "./pages/unit-kerja/ukberanda";
import Box from "@mui/material/Box";
import * as React from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
  return (
      <CookiesProvider>
          <QueryClientProvider client={queryClient}>
              <AuthorizedContextProvider>
                  <Router>
                      <Switch>
                          {/*<Route path="/unitkerja-login" exact>*/}
                          {/*    <RestrictedWrapper>*/}
                          {/*        <LoginContainer />*/}
                          {/*    </RestrictedWrapper>*/}
                          {/*</Route>*/}
                          <Route component={DefaultContainer} />
                      </Switch>
                  </Router>
              </AuthorizedContextProvider>
          </QueryClientProvider>
      </CookiesProvider>

  );
}

// const LoginContainer = () => <Route path="/" component={UKLoginPage} />;

const DefaultContainer = () => (
    <>
        <Paper variant="elevation" elevation={0}>
            <Box sx={{ display: 'flex' }}>
                <Navbar />
        {/*<Route path="/" exact component={UKLoginPage} />*/}
                    <AuthorizedRoute path="/unitkerja-beranda" exact component={UkBeranda}></AuthorizedRoute>
        {/*<AuthorizedRoute path="/unitkerja-paymentrequest" exact component={UKPaymentRequestPage}></AuthorizedRoute>*/}
        {/*<AuthorizedRoute path="/unitkerja-detailpayment/:id" exact component={UKDetailPaymentPage}></AuthorizedRoute>*/}

        {/*<AuthorizedRoute path="/gs-beranda" component={UKBerandaPage}></AuthorizedRoute>*/}
        {/*<AuthorizedRoute path="/gs-paymentrequest" component={GSPaymentRequestPage}></AuthorizedRoute>*/}

        {/*<AuthorizedRoute path="/accounting-request/:id" exact component={AccountingPageDetail}></AuthorizedRoute>*/}
        {/*<AuthorizedRoute path="/accounting-beranda" exact component={AccountingBerandaPage}></AuthorizedRoute>*/}

        {/*<AuthorizedRoute path="/role-account-update" component={ADUpdateRolePage}></AuthorizedRoute>*/}
        {/*<AuthorizedRoute path="/role-account-add" component={ADCreateRolePage}></AuthorizedRoute>*/}
        {/*<AuthorizedRoute path="/admin-beranda" component={ADManagementRolePage}></AuthorizedRoute>*/}

            </Box>
        </Paper>
        <Footer />
    </>
);

export default App;
