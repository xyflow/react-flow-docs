import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';
import { Box } from '@chakra-ui/react';

import NewsletterSignup from '../../../../components/NewsletterSignup';

function ColumnLinkItem({ item }) {
  return item.html ? (
    <li
      className="footer__item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}
function Column({ column }) {
  return (
    <div className="col footer__col">
      <div className="footer__title">{column.title}</div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default function FooterLinksMultiColumn({ columns }) {
  return (
    <div className="row footer__links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
      <Box flex="1.3" className="col footer__col">
        <div className="footer__title">Newsletter</div>
        <Box maxWidth={350}>
          <Box fontSize="sm" mb={2}>
            Get the latest updates, articles and resources directly from the React Flow team
          </Box>
          <NewsletterSignup size="sm" />
        </Box>
      </Box>
    </div>
  );
}
