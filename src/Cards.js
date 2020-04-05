import {Card} from "semantic-ui-react";
import React, {useState} from "react";


const items = [
    {
        header: 'Connect',
        description:
            'Reach out over the phone to someone you have not talked to in a while.',
    },
    {
        header: 'Reflect with Someone',
        description:
            'Call someone you are close and ask them about three good and three bad things that happened to them this week.',
    },
    {
        header: 'Watch',
        description:
            'Visit https://www.watch2gether.com/, create a room, and show your friends the funniest video you have ever seen.',
    },
    {
        header: 'Watch',
        description:
            'Visit https://www.netflixparty.com/, create a party, and show your friends' +
            ' your favorite movie.',
    },
    {
        header: 'Talk to your doctor',
        description:
            'Ask your provider whether it would be' +
            'possible to schedule remote appointments' +
            'via Skype or FaceTime for mental health,' +
            'substance use, or physical health needs. ',
    },
    {
        header: 'Remember the Postal Service',
        description:
            'Send a letter to a relative in another state.',
    },
    {
        header: 'Check local news',
        description:
            'Use the Internet, radio, and television to' +
            'keep up with local ' +
            'events.',
    },
    {
        header: 'Workout',
        description:
            'Use a face-to-face video calling platform to call your favorite gym ' +
            'buddy and challenge them to a plank contest (see who can last the longest planking).',
    },
    {
        header: 'Support Restaurants ',
        description:
            'Use the Internet to find out what local restaurants are open for ' +
            'takeout and order your favorite meal.',
    },
    {
        header: 'Post',
        description:
            'Use the Internet to post a funny picture on social media.',
    },
    {
        header: 'Enjoy the Outdoors',
        description:
            'Use a face-to-face video calling platform to call a friend ' +
            'buddy, sit outside, and chat them. Hopefully it`s not too cold!',
    },
    {
        header: 'Write to Express',
        description:
            'Write a story or a poem and then call a relative and read it to them.' +
            ' I`m sure they will enjoy it!',
    },
    {
        header: 'Go for a drive',
        description:
            'Go for a drive with someone who lives in your home. Visit your favorite road.',
    },
    {
        header: 'Relax',
        description:
            'Relax your body often by doing things that' +
            'work for you, like taking deep breaths or meditating',
    },
    {
        header: 'Stretch',
        description:
            'Be sure to find someone you live with and ask them to stretch with you.',
    },
    {
        header: 'Do Yoga',
        description:
            'Find a friend who will do some yoga with you over https://www.watch2gether.com/',
    },
];

export default function Cards() {
    const [inProp, setInProp] = useState(false);
    const setTrue = () => setInProp(true);
    setTimeout(setTrue, 18000);
    return (
        <div className="App-body">
            <Card.Group className={`my-node-enter${inProp?"-active":""}`} items={randItems(items)} />
        </div>
    )
}

function randItems(items) {
    let indices = [];
    for (let i = 0; i < 3; i++) {
        let temp = Math.floor(Math.random() * items.length);
        if (indices.indexOf(temp) < 0) {
            indices.push(temp);
        } else {
            i--;
        }
    }
    return items.filter((item, index, array) => {
        return indices.indexOf(index) > -1
    })
}
