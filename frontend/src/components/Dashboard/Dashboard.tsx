import { Box } from '@nimbus-ds/components';
import { Layout, Page } from '@nimbus-ds/patterns';
import "./style.css"
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <Page maxWidth="900px">
        <Page.Header title="DashBoard" subtitle="Settings instructions" />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Box
                
              >
                <table>
                  <tr>
                    <th>Paso 1:</th>
                    <th>Paso 2:</th>
                    <th>Paso 3:</th>
                  </tr>
                  <tr>
                    <td>En tu cuenta dropi, ve a la opción "Mis integraciones"</td>
                    <td>Crea tu tienda y copia el token generado</td>
                    <td>Falta parte de la nube app</td>
                  </tr>
                 
                </table>
              </Box>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </div>
  );
};

export default Dashboard;
