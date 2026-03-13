import React from 'react';
import { newsItems } from '../data/news';

const NewsSection = () => {
    return (
        <section className="news" id="news">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">最新消息</span>
                    <h2 className="section-header__title">Latest News</h2>
                    <p className="section-header__desc">
                        掌握 SalesPilot 的最新動態、產品更新與業界趨勢分析。
                    </p>
                </div>
                
                <div className="news__grid">
                    {newsItems.map((item) => (
                        <article key={item.id} className="news__card">
                            <div className="news__image-wrapper">
                                <img src={item.image} alt={item.title} className="news__image" />
                                <div className="news__tag">{item.tag}</div>
                            </div>
                            <div className="news__content">
                                <time className="news__date" dateTime={item.date.replace(/\./g, '-')}>
                                    {item.date}
                                </time>
                                <h3 className="news__card-title">{item.title}</h3>
                                <p className="news__card-desc">{item.description}</p>
                                <a href="#" className="news__link">
                                    閱讀更多
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10.8333 5L15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
