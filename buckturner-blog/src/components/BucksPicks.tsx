import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Trophy } from 'lucide-react';

export const BucksPicks: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set([0]));

  const toggleCategory = (index: number) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(index)) {
      newOpenCategories.delete(index);
    } else {
      newOpenCategories.add(index);
    }
    setOpenCategories(newOpenCategories);
  };

  const categories = [
    {
      icon: 'trophy',
      title: 'my favorites bars - oct 2025',
      items: [
        { name: 'Wicked Bar', description: 'Hotties everywhere 9/10 + Tony the manager is the best.' },
        { name: 'Tomcats', description: '9/10 Hot Girls, Good vibes (Emmy you are so hot...)' },
        { name: 'Flirt Bar', description: '9/10 Girls are so hot.' },
        { name: 'Boofies Bar', description: '8,5/10 Amazing vibe, hot girls and a lot of spinners.' },
        { name: 'Liquid Bar', description: '8,5/10 Hot girls and amazing room for short time !' },
        { name: 'Desire and Seduction', description: '8,5/10 Hot some really big ass there, holy f' },
        { name: 'ShowGirls on Soi 6', description: 'Consistent 8/10s and good vibes but lineup was the best before.' },
        { name: 'Foxy Bar', description: '8/10 Nice girls, always a good time' },
        { name: '3 Angels', description: '8/10 Funny girls' }
      ]
    },
    {
      icon: '🍑',
      title: 'Best Big Ass Action',
      items: [
        { name: 'Seduction Bar', description: 'Thick, juicy, dangerous.' },
        { name: 'Foxy Bar', description: 'Booty that deserves its own Instagram page.' },
        { name: 'Desire on Soi 6', description: 'Worth the trip.' }
      ]
    },
    {
      icon: '💋',
      title: 'Best BJ Queens',
      items: [
        { name: 'Bee, Passion Bar', description: 'Fast, focused, and filthy.' },
        { name: 'Joy, Omega Bar', description: 'You\'ll forget your own name.' }
      ]
    },
    {
      icon: '🌀',
      title: 'Best Spinners',
      items: [
        { name: 'Ket, Fire Bar', description: '45 kg of pure dynamite.' },
        { name: 'Fern, Boofies', description: 'The twister champion of Soi 6.' }
      ]
    },
    {
      icon: '🍻',
      title: 'Best Post-Nut Chill Spots',
      items: [
        { name: 'Ruby', description: 'Cold beer, good banter, zero drama.' },
        { name: 'ToyBox', description: 'Great for round two scouting.' }
      ]
    }
  ];

  return (
    <div className="bucks-picks-container">
      <div className="bucks-picks">
        <div className="bucks-picks-header">
          <h3 className="bucks-picks-title">
            <Trophy size={28} style={{ display: 'inline-block', marginRight: '12px', verticalAlign: 'middle' }} />
            Buck\'s Picks
          </h3>
          <p className="bucks-picks-subtitle">Here\'s where the legends are born and destroyed:</p>
        </div>
        
        <div className="picks-categories">
          {categories.map((category, index) => (
            <div key={index} className="picks-category">
              <button
                className="picks-category-header"
                onClick={() => toggleCategory(index)}
                aria-expanded={openCategories.has(index)}
              >
                <span className="category-icon">
                  {category.icon === 'trophy' ? <Trophy size={18} /> : category.icon}
                </span>
                <span className="category-title">{category.title}</span>
                <span className="category-toggle">
                  {openCategories.has(index) ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </span>
              </button>
              
              <div className={`picks-category-content ${openCategories.has(index) ? 'open' : ''}`}>
                <ul className="picks-list">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <strong>{item.name}</strong> – {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
