import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptsoft',
  description: 'Descubra e Compartilhe Prompts IA',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='pt-BR'>
      <body>
        <Provider>
          <div className='main'>
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;