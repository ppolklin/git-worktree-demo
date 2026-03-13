import React, { useState } from 'react';
import { faqData } from '../data/faq';

/**
 * FAQ Item Component
 * Implements an Accordion item with smooth CSS transitions.
 */
const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button 
        className="faq-item__question" 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="faq-item__title">{item.question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className="faq-item__answer-wrapper" style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
        <div className="faq-item__answer">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * FaqSection Component
 * Renders a list of FAQ items in an accordion format.
 */
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-header__badge">支援與資源</span>
          <h2 className="section-header__title">常見問答</h2>
          <p className="section-header__desc">
            針對 Git Worktree 與並行開發流程的常見技術問題，我們為您整理了詳細的解答。
          </p>
        </div>
        
        <div className="faq__list">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index} 
              item={item} 
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
