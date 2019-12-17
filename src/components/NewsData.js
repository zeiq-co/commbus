import React from 'react';

import NewsItems from './NewsItems';

const NewsData = () => (
  <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        <NewsItems
          title="understard"
          bgImage="/images/news/engagement@2x.jpg"
          link="/newsblog"
        />
        <NewsItems
          title="ncxjsjs"
          bgImage="/images/news/marketing@2x.jpg"
          link="/newsblog"
        />
        <NewsItems
          title="axkjaxkja"
          bgImage="/images/news/mark@2x.png"
          link="/newsblog"
        />
        <NewsItems
          title="kljdkiwdwkja"
          bgImage="/images/news/support@2x.jpg"
          link="/newsblog"
        />
        <NewsItems
          title="kljdkiwdwkja"
          bgImage="/images/news/lordmayor@2x.jpg"
          link="/newsblog"
        />
        <NewsItems
          title="kljdkiwdwkja"
          bgImage="/images/news/transport@2x.jpg"
          link="/newsblog"
        />
        <NewsItems
          title="kljdkiwdwkja"
          bgImage="/images/news/slimming@2x.jpg"
          link="/newsblog"
        />
        <NewsItems
          title="kljdkiwdwkja"
          bgImage="/images/news/castle@2x.jpg"
          link="/newsblog"
        />
      </div>
    </div>
  </section>
);
export default NewsData;