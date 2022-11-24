import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import CommentComponent from '..';
import { Comment } from '../../../context/comments/types';
import { ThemeProvider } from 'styled-components';
import { ProviderNotification } from '../../../context/comments';
import { Theme } from '../../../styles/theme';
import userEvent from '@testing-library/user-event';

const commmentProps: Comment = {
  id: 501,
  content:
    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: '1 month ago',
  score: 12,
  user: {
    image: {
      png: '/images/avatars/image-amyrobson.png',
      webp: '/images/avatars/image-amyrobson.webp',
    },
    username: 'amyrobson',
  },
  replies: [],
};
const handleClickMock = jest.fn();

const renderWithProviders = (children: React.ReactNode) => {
  return render(
    <ThemeProvider theme={Theme}>
      <ProviderNotification>{children}</ProviderNotification>
    </ThemeProvider>,
  );
};

describe('<Comment', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('shoul be render correclty', async () => {
    const { container } = await act(async () =>
      renderWithProviders(
        <CommentComponent
          {...commmentProps}
          _handleCLickScore={() => handleClickMock()}
        />,
      ),
    );

    expect(screen.getByText(commmentProps.content)).toBeInTheDocument();
    expect(screen.getByText(commmentProps.createdAt)).toBeInTheDocument();
    expect(screen.getByText(commmentProps.user.username)).toBeInTheDocument();
    expect(screen.getByTestId('reply').firstChild).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be reply if exist', async () => {
    await act(async () => {
      const mockCommentWithReply = {
        ...commmentProps,
        replies: [
          {
            content: 'Content reply',
            createdAt: '10 month ago',
            id: 10,
            score: 1,
            user: {
              image: {
                png: '/images/icon-minus.svg',
                webp: '/images/icon-minus.svg',
              },
              username: 'name reply',
            },
          },
        ] as Comment[],
      };
      renderWithProviders(
        <CommentComponent
          {...mockCommentWithReply}
          _handleCLickScore={() => handleClickMock()}
        />,
      );
    });

    expect(screen.getByText('Content reply')).toBeInTheDocument();
    expect(screen.getByText('10 month ago')).toBeInTheDocument();
    expect(screen.getByText('name reply')).toBeInTheDocument();

    expect(screen.getByTestId('reply').firstChild).toBeInTheDocument();
  });

  it('should be render correclty', async () => {
    await act(async () => {
      renderWithProviders(
        <CommentComponent
          {...commmentProps}
          _handleCLickScore={handleClickMock}
        />,
      );
    });
    const buttonScore = screen.getByTestId('plus');

    await waitFor(() => userEvent.click(buttonScore));

    expect(handleClickMock).toBeCalledTimes(1);
    expect(handleClickMock).toBeCalledWith({
      action: 'plus',
      id: 501,
      type: 'comment',
    });
  });
});
