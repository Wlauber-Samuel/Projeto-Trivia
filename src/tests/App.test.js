import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testes do App Trivia', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
  });

  const nameInput = 'input-player-name';
  const emailInput = 'input-gravatar-email';

  describe('Testes da página de Login', () => {
    it('Testa se existem os campos de e-mail e nome e os botões de entrar e configurações', () => {
      expect(screen.getByTestId(nameInput)).toBeInTheDocument();
      expect(screen.getByTestId(emailInput)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument();
    });

    it('Testa se o botão de entrar está desabilitado caso os campos não estejam preenchidos', () => {
      expect(screen.getByRole('button', { name: /play/i })).toBeDisabled();
    });

    it('Testa se botão de entrar está habilitado para e-mail e nome válidos', () => {
      userEvent.type(screen.getByTestId(nameInput), 'Group 3');
      userEvent.type(screen.getByTestId(emailInput), 'group-3@gmail.com');
      expect(screen.getByRole('button', { name: /play/i })).toBeEnabled();
    });

    it('Testa se ao clicar no botão de play é redirecionado para a página correspondente', async () => {
      userEvent.type(screen.getByTestId(nameInput), 'Group 3');
      userEvent.type(screen.getByTestId(emailInput), 'group-3@gmail.com');
      userEvent.click(screen.getByRole('button', { name: /play/i }));
      await waitFor(() =>  expect(screen.getByText(/group 3/i)).toBeInTheDocument());
    });

    it('Testa se ao clicar no botão de configurações é redirecionado para a página correspondente', () => {
      userEvent.click(screen.getByRole('button', { name: /settings/i }));
      expect(screen.getByTestId('settings-title')).toBeInTheDocument();
    });
  });
});
