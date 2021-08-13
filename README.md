# ![](https://i.imgur.com/AgSENFe.png "Unshackle") Unshackle

Reward yourself for avoiding the psychological traps of the attention economy on the internet. Take part in a weekly automated and crowd-funded competition to reduce your unhealthy browsing habits and earn ETH.

## Description

The centralized internet is highly dependant on the attention economy, which relies on manipulating users into spending as much of their time and attention doing things that are unhealthy and addictive. Documentaries like [The Social Dilemma](https://www.thesocialdilemma.com/) expose the inner workings and motivations of social media platforms, and their predatory nature.

Impulsive internet browsing is hard to stop, even for people who understand how it works. Many (most?) people struggle with self-control while browsing during moments of weakness, such as periods of high stress, or at the end of the day when people are fatigued.

This project is an attempt to incentivize effective internet browsing, and so provide a counter-balance to engaging with social media platforms. Users can opt-in to this automated scoring system which pays out rewards to those who manage to avoid impulsive browsing.

## Architecture

> NOTE: This is currently a work in progress, and likely to change drastically.

### Overview

#### The Competition Cycle

- Each cycle lasts 7 days, for which users must deposit ETH and tether their internet browsing device to a smart contract.

#### The Rules

1. You can browse whatever websites you want.
2. ...
3. Profit!

#### Verifying Browsing Habits

- Tethering your device requires installing a browser extension (or an app) and generating a unique ID. Once tethered, your device will transmit data to a stream ([Ceramic](https://ceramic.network/)) for verification and scoring.

#### Rewarding Users

- Rewards are paid out at the end of each competition cycle. Users earn relative to the amount they deposit, and according to their browsing performance.

## FAQ

> Why not just use X to block your internet access to problematic websites?

It doesn't work, and it negatively incentivizes itself. Even the best apps can be circumnavigated, and after a few hours of not being allowed to use YouTube you'll think of a very good reason why you actually need to use it right now.

> Why build this on the blockchain?

To give users a trustworthy utility, verifiably track performance (with a governance token), and reward users with currency.

## License

Distributed under the GNU GPL 3.0 License. See `LICENSE` for more information.

## Authors

[@alexmklos](https://twitter.com/alexmklos)

## Acknowledgments

- [The Social Dilemma](https://www.thesocialdilemma.com/)
- [Cold Turkey](https://getcoldturkey.com/)
- [SelfControl](https://selfcontrolapp.com/)
- [Jaron Lanier](http://www.jaronlanier.com/)