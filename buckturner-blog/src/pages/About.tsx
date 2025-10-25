import React from 'react';
import { WindowFrame } from '../components/WindowFrame';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <WindowFrame>
        <div className="about-content">
          <h1 className="page-title">About Buck Turner</h1>
          
          <div className="about-text">
            <p>
              Welcome to my corner of the internet, where I document the wild, weird, and absolutely unrepeatable reality of life in Pattaya, Thailand.
            </p>

            <p>
              I didn't plan to live here.<br />
              Nobody does.<br />
              You come for two weeks, you stay for two years, and suddenly you're arguing with a mamasan about bar fines at 3AM like it's a normal Tuesday.
            </p>

            <p>
              I'm Buck Turner, expat, monger, chaos enthusiast, and creator of The Vault Pattaya, the VIP Pattaya Girls Index, and this blog: mylifeinpattaya.
            </p>

            <h2 className="about-subtitle">What This Blog Is</h2>

            <p>
              This isn't your average travel blog.<br />
              No drone shots of sunsets, no "Top 10 Temples You Must Visit."
            </p>

            <p>
              This is Pattaya unfiltered = the good, the bad, and the "Jesus Christ, Buck, what were you thinking?" moments.
            </p>

            <p>
              You'll find:
            </p>

            <p>
              Nightlife disasters that double as survival guides.
            </p>

            <p>
              Monger field reports straight from the frontlines of Soi 6 and Walking Street.
            </p>

            <p>
              Love stories that start with a lady drink and end with a missing phone.
            </p>

            <p>
              Cultural lessons learned the hard way (and often the drunk way).
            </p>

            <p>
              Every story here happened. Maybe not exactly as I remember it… but close enough.
            </p>

            <h2 className="about-subtitle">Why This Exists</h2>

            <p>
              Because my friends back home didn't believe me.<br />
              Every time I told them about a girl eating noodles topless on my motorbike at 4AM or a Russian DJ fight at 808, they said the same thing:
            </p>

            <p>
              "No way, that's not real."
            </p>

            <p>
              So, I made this blog as proof.<br />
              Yes, it's real.<br />
              Yes, I really did get robbed by a ladyboy with better makeup than my ex.<br />
              Yes, I really did barfine two sisters by accident.<br />
              And yes, I'd probably do it again.
            </p>

            <h2 className="about-subtitle">The Buck Turner Mission</h2>

            <p>
              I built this blog because no one else will tell you the real story of Pattaya.
            </p>

            <p>
              Forget the sugarcoated travel influencers and outdated forum "advice."<br />
              Here, you'll get the best free resources on the internet, detailed guides, monger strategies, maps, insider tips = all written by someone who's lived it.
            </p>

            <p>
              Everything you'll find here, I could've easily put behind a paywall.<br />
              But I didn't.<br />
              Because I remember my first trip, lost, clueless, getting fleeced left and right.<br />
              So if what you read here helps you survive your first night (and maybe even win it), then good.
            </p>

            <p>
              You owe me a beer. :)
            </p>

            <h2 className="about-subtitle">Other Projects</h2>

            <p>
              When I'm not getting into trouble, I'm actually building useful stuff for the lads:
            </p>

            <p>
              The Vault Pattaya — the ultimate Pattaya tool: interactive maps, guides, bar tracking, and girl data that actually matters.
            </p>

            <p>
              VIP Pattaya Girls Index 2.0 — the most complete database of Pattaya girls ever made. Real reviews. Real prices. No bullshit.
            </p>

            <p>
              mylifeinpattaya.blog — where the stories, chaos, and lessons live on forever.
            </p>

            <h2 className="about-subtitle">Get in Touch</h2>

            <p>
              Got a story that'll top mine? Want to call me a degenerate? Or just need help finding your way through the neon jungle?
            </p>

            <p>
              Reach out. I'm always down to hear from fellow Pattaya survivors.
            </p>

            <p className="about-signature">
              - Buck Turner<br />
              "I didn't choose Pattaya. Pattaya chose me."
            </p>
          </div>
        </div>
      </WindowFrame>
    </div>
  );
};
