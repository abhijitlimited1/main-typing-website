/**
 * @fileOverview Data store for programmatic SEO page generation.
 * Contains metadata and content details for each targeted keyword/slug.
 */

export interface PageSeoData {
    slug: string;
    keyword: string;
    title: string; // 50-60 chars
    description: string; // 150-160 chars
    h1: string;
    h2: string[];
    relatedKeywords: string[];
    faq?: { question: string; answer: string }[]; // Optional FAQ section
  }
  
  export const seoData: PageSeoData[] = [
    {
      slug: 'online-typing-test',
      keyword: 'online typing test',
      title: 'Online Typing Test – Test Your Typing Speed in Seconds',
      description: 'Take our online typing test to check your typing speed in WPM. Improve accuracy and practice with free tools – fast and easy!',
      h1: 'Online Typing Test',
      h2: ['Check Your Typing Speed in WPM', 'Improve Your Typing Accuracy'],
      relatedKeywords: ['WPM test', 'speed test', 'keyboarding'],
       faq: [
        { question: "What is a good online typing test score?", answer: "Average typing speed is around 40 WPM. A good score is typically considered 50-60 WPM or higher. Professionals often type at 70+ WPM." },
        { question: "How is typing speed measured?", answer: "Typing speed is usually measured in Words Per Minute (WPM), calculated based on the number of correct words typed within a specific time frame (often 1 minute)." }
      ]
    },
    {
      slug: 'free-typing-test',
      keyword: 'free typing test',
      title: 'Free Typing Test – Check Your WPM Speed Online',
      description: 'Use our 100% free typing test to measure your words per minute (WPM) and accuracy. No sign-up required, start practicing now!',
      h1: 'Free Typing Test',
      h2: ['Measure Your WPM for Free', 'Practice Typing Online at No Cost'],
      relatedKeywords: ['free WPM test', 'typing speed free', 'no signup typing test'],
      faq: [
          { question: "Is this typing test really free?", answer: "Yes, this typing test is completely free to use. There are no hidden costs or sign-ups required." },
          { question: "Can I use the free typing test multiple times?", answer: "Absolutely! You can take the test as many times as you like to track your progress and improve your skills." }
        ]
    },
    {
      slug: 'typing-test-practice',
      keyword: 'typing test practice',
      title: 'Typing Test Practice – Improve Your Speed & Accuracy',
      description: 'Practice your typing skills with our interactive typing test practice sessions. Get faster and more accurate with targeted exercises.',
      h1: 'Typing Test Practice',
      h2: ['Enhance Your Keyboard Skills', 'Track Your Progress with Practice'],
      relatedKeywords: ['typing practice', 'keyboard practice', 'improve typing', 'typing drills'],
       faq: [
          { question: "How does practice improve typing speed?", answer: "Consistent practice builds muscle memory, reduces errors, and increases familiarity with key placement, leading to faster and more accurate typing." },
          { question: "How often should I practice typing?", answer: "Even 10-15 minutes of focused practice daily can lead to significant improvements in your typing speed and accuracy over time." }
        ]
    },
    {
      slug: 'english-typing-test',
      keyword: 'english typing test',
      title: 'English Typing Test Online – Measure Your Speed',
      description: 'Test your English typing speed with our online tool. Accurate WPM and error tracking specifically for English text passages.',
      h1: 'English Typing Test Online',
      h2: ['Test Your Speed with English Texts', 'Check English Typing Accuracy'],
      relatedKeywords: ['online typing test English', 'UK English typing test', 'US English typing test'],
       faq: [
        { question: "Does this test use standard English words?", answer: "Yes, the texts are composed of common English words suitable for testing general English typing proficiency." },
        { question: "Is this test suitable for ESL learners?", answer: "Yes, it can be a helpful tool for English as a Second Language (ESL) learners to practice typing English words and improve fluency." }
      ]
    },
    {
      slug: 'learn-typing',
      keyword: 'learn typing',
      title: 'Learn Typing Online – Free Lessons & Practice Tests',
      description: 'Start learning to type faster today! Our free lessons and practice tests help you improve keyboarding skills from scratch.',
      h1: 'Learn Typing Online',
      h2: ['Free Typing Lessons for Beginners', 'Practice Exercises to Improve Speed'],
      relatedKeywords: ['typing tutor', 'keyboarding lessons', 'touch typing', 'typing basics'],
      faq: [
          { question: "What is touch typing?", answer: "Touch typing is the ability to type without looking at the keyboard, using muscle memory to find the keys." },
          { question: "Is it hard to learn typing?", answer: "Learning to type takes practice, but with consistent effort using structured lessons and tests like this one, most people can significantly improve." }
        ]
    },
    {
      slug: 'typing-speed-practice',
      keyword: 'typing speed practice',
      title: 'Typing Speed Practice – Increase Your WPM Score',
      description: 'Focus on increasing your typing speed with targeted practice sessions. Monitor your WPM growth and improve your keyboard fluency.',
      h1: 'Typing Speed Practice',
      h2: ['Boost Your Words Per Minute', 'Practice Drills for Faster Typing'],
      relatedKeywords: ['WPM practice', 'increase typing speed', 'fast typing practice', 'speed drills'],
       faq: [
        { question: "What's the best way to practice for speed?", answer: "Focus on accuracy first, then gradually increase speed. Use practice drills that challenge you slightly beyond your comfort zone." },
        { question: "Can I track my WPM progress?", answer: "Yes, taking tests regularly allows you to monitor your Words Per Minute (WPM) score and see how your speed improves over time." }
      ]
    },
    {
      slug: 'typing-speed',
      keyword: 'typing speed',
      title: 'Check Your Typing Speed – Online WPM Test Tool',
      description: 'Find out your current typing speed in Words Per Minute (WPM) with our quick, easy, and accurate online test. Get results instantly!',
      h1: 'Check Your Typing Speed',
      h2: ["What's Your Current WPM?", 'Fast and Accurate Typing Speed Test'],
      relatedKeywords: ['WPM check', 'typing rate', 'keyboard speed', 'measure typing speed'],
       faq: [
          { question: "What does WPM stand for?", answer: "WPM stands for Words Per Minute, the standard measure of typing speed." },
          { question: "How can I improve my typing speed?", answer: "Consistent practice, focusing on accuracy, learning touch typing, and maintaining good posture can all help improve your typing speed." }
        ]
    },
    {
      slug: 'typing-test-5-minutes',
      keyword: 'typing test 5 minutes',
      title: 'Typing Test 5 Minutes – Extended Speed & Accuracy Check',
      description: 'Take a comprehensive 5-minute typing test to evaluate your sustained speed and accuracy over a longer duration. Free and online.',
      h1: 'Typing Test (5 Minutes)',
      h2: ['Test Your Typing Stamina (5 Min)', 'Check Speed and Accuracy Over Time'],
      relatedKeywords: ['5 min typing test', 'long typing test', 'typing endurance', 'WPM test 5 minutes'],
      faq: [
        { question: "Why take a 5-minute typing test?", answer: "A longer test like 5 minutes helps measure your consistency and endurance, providing a more realistic assessment of your typical typing speed compared to shorter tests." },
        { question: "Is 5 minutes a standard typing test duration?", answer: "While 1-minute tests are common, 3-minute and 5-minute tests are also frequently used for more thorough evaluations, especially in professional settings." }
      ]
    },
    {
      slug: 'free-typing-test-online',
      keyword: 'free typing test online',
      title: 'Free Typing Test Online – Instant WPM Results',
      description: 'Get your WPM score instantly with our free online typing test. Practice and improve your keyboarding skills anytime, anywhere.',
      h1: 'Free Typing Test Online',
      h2: ['Instant WPM Results Online', 'Practice Typing Anywhere, Anytime'],
      relatedKeywords: ['online WPM test free', 'web typing test', 'internet typing test'],
       faq: [
          { question: "Do I need to install anything?", answer: "No, this is a completely online typing test. You just need a web browser and an internet connection." },
          { question: "Is the test mobile-friendly?", answer: "Yes, the test is designed to work on desktops, tablets, and mobile devices." }
        ]
    },
    {
      slug: 'fast-typing-test',
      keyword: 'fast typing test',
      title: 'Fast Typing Test – Challenge Your Speed Limits',
      description: 'Push your typing speed to the limit with our fast typing test! See how quickly you can accurately type the provided text. Aim for high WPM!',
      h1: 'Fast Typing Test Challenge',
      h2: ['How Fast Can You Type?', 'Test Your Maximum Typing Speed'],
      relatedKeywords: ['speed typing test', 'quick typing test', 'WPM challenge', 'high speed typing'],
      faq: [
          { question: "What makes this a 'fast' typing test?", answer: "This test focuses on allowing users to push their speed limits, often featuring common words designed for quick typing practice." },
          { question: "Is speed more important than accuracy?", answer: "While speed is important, accuracy is crucial. High speed with many errors is less effective than slightly slower, more accurate typing. Aim for a balance." }
        ]
    },
    {
      slug: 'typing-test-wpm',
      keyword: 'typing test wpm',
      title: 'Typing Test WPM – Measure Your Words Per Minute',
      description: 'Measure your typing speed accurately in Words Per Minute (WPM) with our reliable typing test. Track your progress and improve!',
      h1: 'Typing Test WPM',
      h2: ['Calculate Your Words Per Minute', 'Accurate WPM Measurement'],
      relatedKeywords: ['WPM test', 'words per minute test', 'typing speed WPM', 'check WPM'],
       faq: [
          { question: "How is WPM calculated?", answer: "WPM is typically calculated as (Total Characters Typed / 5) / Time in Minutes. Errors are sometimes penalized depending on the test rules." },
          { question: "What is an average WPM score?", answer: "The average typing speed is around 40 WPM. Aiming for 50-60 WPM is a good goal for general proficiency." }
        ]
    },
    {
      slug: 'typing-skills-test',
      keyword: 'typing skills test',
      title: 'Typing Skills Test – Assess Your Keyboarding Ability',
      description: 'Assess your overall typing skills, including speed and accuracy, with our comprehensive test. Identify areas for improvement.',
      h1: 'Typing Skills Test',
      h2: ['Evaluate Your Keyboarding Proficiency', 'Test Speed and Accuracy Skills'],
      relatedKeywords: ['keyboarding skills test', 'typing assessment', 'typing proficiency test', 'accuracy test'],
       faq: [
        { question: "What typing skills does this test measure?", answer: "This test primarily measures your typing speed (WPM) and accuracy (percentage of correct characters)." },
        { question: "How can I use the results?", answer: "Use the results to understand your current skill level, identify whether speed or accuracy needs more focus, and track improvement over time." }
      ]
    },
  ];
  
  export const getSeoDataBySlug = (slug: string): PageSeoData | undefined => {
    return seoData.find(data => data.slug === slug);
  };
  