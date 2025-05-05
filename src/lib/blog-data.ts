/**
 * @fileOverview Data store for blog posts.
 * Contains metadata and content details for each blog post.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  relatedPosts?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-improve-typing-speed',
    title: '10 Proven Ways to Improve Your Typing Speed',
    excerpt: 'Discover effective techniques to boost your typing speed and accuracy with these expert tips.',
    date: 'June 15, 2023',
    readTime: 5,
    tags: ['typing speed', 'productivity', 'beginner'],
    content: `
# 10 Proven Ways to Improve Your Typing Speed

Are you looking to boost your typing speed and efficiency? Whether you're a student, professional, or just someone who spends a lot of time on the computer, improving your typing skills can save you countless hours and reduce strain on your hands and wrists.

## 1. Start with Proper Posture and Hand Position

The foundation of fast typing begins with how you sit and position your hands:

- Sit up straight with your feet flat on the floor
- Keep your elbows bent at a 90-degree angle
- Position your wrists slightly above the keyboard, not resting on the desk
- Place your fingers on the home row (ASDF for left hand, JKL; for right hand)

## 2. Use All Ten Fingers

Many self-taught typists develop habits of using only a few fingers. Learning to use all ten fingers properly is essential for speed:

- Each finger should be responsible for specific keys
- Your thumbs should handle the space bar
- Avoid looking at the keyboard while typing

## 3. Practice Touch Typing

Touch typing is the ability to type without looking at the keyboard:

- Start with typing exercises that focus on the home row
- Gradually add other rows and keys
- Use online typing tests to track your progress
- Aim for accuracy first, then speed

## 4. Take Regular Typing Tests

Regular assessment helps you identify weaknesses and track improvement:

- Take a typing test at least once a week
- Focus on both WPM (words per minute) and accuracy
- Set realistic goals for improvement (e.g., increase by 5 WPM each month)

## 5. Use Typing Software and Games

Make practice fun and engaging:

- Try gamified typing programs that make learning enjoyable
- Use specialized typing software that adapts to your skill level
- Practice with typing games that focus on your weak spots

## 6. Type Real Content

Practicing with meaningful content helps build practical skills:

- Type out articles, blog posts, or books you enjoy
- Practice transcribing audio content
- Try writing your thoughts directly rather than drafting by hand first

## 7. Learn Keyboard Shortcuts

Keyboard shortcuts can significantly increase your efficiency:

- Master common shortcuts (Ctrl+C, Ctrl+V, Ctrl+Z)
- Learn application-specific shortcuts for programs you use frequently
- Create custom shortcuts for repetitive tasks

## 8. Gradually Increase Difficulty

Challenge yourself with increasingly difficult material:

- Start with common words and simple sentences
- Progress to complex vocabulary and technical terms
- Practice with content that includes numbers and special characters

## 9. Maintain Consistency

Regular practice is more effective than occasional intensive sessions:

- Practice for 15-30 minutes daily rather than hours once a week
- Create a typing routine and stick to it
- Track your progress to stay motivated

## 10. Take Care of Your Hands

Prevent strain and injury:

- Take short breaks every 30-60 minutes
- Do hand and wrist stretches regularly
- Consider an ergonomic keyboard for long typing sessions

## Conclusion

Improving your typing speed is a gradual process that requires consistent practice and proper technique. By following these tips and dedicating time to regular practice, you can significantly increase your typing speed and efficiency, making all your computer-based tasks faster and more enjoyable.

Remember, accuracy should always come before speed. It's better to type correctly at a moderate pace than to make numerous errors at high speed. As you practice, your fingers will develop muscle memory, and your speed will naturally increase while maintaining accuracy.
    `,
    author: {
      name: 'Emily Chen',
      avatar: '/authors/emily-chen.jpg',
      bio: 'Typing coach and productivity expert with 10+ years of experience teaching touch typing.'
    },
    relatedPosts: ['keyboard-ergonomics-guide', 'typing-exercises-for-beginners']
  },
  {
    slug: 'keyboard-ergonomics-guide',
    title: 'The Complete Guide to Keyboard Ergonomics',
    excerpt: 'Learn how to set up your workspace to prevent strain and injury while improving your typing efficiency.',
    date: 'July 3, 2023',
    readTime: 7,
    tags: ['ergonomics', 'health', 'workspace'],
    content: `
# The Complete Guide to Keyboard Ergonomics

Proper keyboard ergonomics is essential for anyone who spends significant time typing. This guide covers everything you need to know about setting up an ergonomic workspace to prevent pain, strain, and long-term injuries while improving your typing efficiency.

## Why Keyboard Ergonomics Matter

Many people experience discomfort or pain after long typing sessions. This isn't just an inconvenience—it can lead to serious conditions like:

- Carpal tunnel syndrome
- Tendonitis
- Repetitive strain injury (RSI)
- Neck and back pain

Proper ergonomics can prevent these issues while also improving your typing speed and accuracy.

## Choosing the Right Keyboard

Not all keyboards are created equal. Here's what to look for:

### Keyboard Types

1. **Standard Keyboards**: The most common type, but not always the most ergonomic.

2. **Split Keyboards**: Separate the keyboard into two sections, allowing your hands to rest at a more natural angle.

3. **Ergonomic Keyboards**: Designed with a curved or angled layout to reduce wrist strain.

4. **Mechanical Keyboards**: Provide better tactile feedback and often require less force to press keys.

### Key Features to Consider

- **Key Travel**: The distance a key moves when pressed. Too little can cause you to "bottom out" with force.
- **Actuation Force**: How much pressure is needed to register a keystroke. Lower is generally better for reducing strain.
- **Tenting**: The ability to angle the keyboard upward in the center, reducing forearm pronation.
- **Adjustable Height**: Allows you to customize the keyboard position to your specific needs.

## Optimal Keyboard Positioning

The way you position your keyboard is just as important as the keyboard itself:

1. **Height**: Your keyboard should be at a height where your elbows form approximately a 90-degree angle when typing.

2. **Distance**: Position the keyboard so your elbows can remain close to your body.

3. **Angle**: The keyboard should be flat or slightly tilted away from you (negative tilt), never tilted toward you.

4. **Centered Alignment**: Center the keyboard with your body, not with the monitor or desk.

## Proper Hand and Wrist Positioning

Correct hand positioning is crucial for preventing strain:

1. **Wrist Position**: Keep wrists straight and neutral, not bent up, down, or to either side.

2. **Floating Hands**: Ideally, your wrists should "float" above the keyboard rather than resting on a surface.

3. **If Using a Wrist Rest**: It should support your palms, not your wrists, and only during breaks, not while actively typing.

4. **Finger Positioning**: Use all ten fingers with each responsible for specific keys. Fingers should be slightly curved, not flat or overly bent.

## Workspace Setup Beyond the Keyboard

Ergonomics extends beyond just your keyboard:

1. **Chair Height**: Adjust so your feet are flat on the floor and knees at approximately 90 degrees.

2. **Desk Height**: Should allow your arms to be at the correct angle for typing.

3. **Monitor Position**: The top of the screen should be at or slightly below eye level, about an arm's length away.

4. **Lighting**: Ensure adequate lighting to reduce eye strain, which can affect your overall posture.

## Movement and Breaks

Even the most ergonomic setup requires breaks:

1. **The 20-20-20 Rule**: Every 20 minutes, look at something 20 feet away for 20 seconds.

2. **Microbreaks**: Take 30-second breaks every 10 minutes to rest your hands.

3. **Stretching**: Perform simple hand and wrist stretches throughout the day.

4. **Movement**: Get up and move around for a few minutes every hour.

## Ergonomic Accessories

Consider these additional items to enhance your setup:

1. **Wrist Rests**: Can provide support during breaks (remember not to rest while typing).

2. **Keyboard Trays**: Allow for more precise positioning and adjustment.

3. **Ergonomic Mice**: Complement your keyboard setup to prevent strain.

4. **Standing Desks**: Allow you to alternate between sitting and standing.

## Conclusion

Investing time in proper keyboard ergonomics pays dividends in comfort, health, and productivity. Remember that the best ergonomic setup is one that you adjust and refine based on your personal needs and comfort.

Start by implementing these recommendations gradually, paying attention to how your body responds. Even small improvements to your typing ergonomics can lead to significant benefits over time.
    `,
    author: {
      name: 'Dr. Marcus Johnson',
      avatar: '/authors/marcus-johnson.jpg',
      bio: 'Ergonomics specialist and physical therapist focusing on workplace injury prevention.'
    },
    relatedPosts: ['how-to-improve-typing-speed', 'preventing-typing-related-injuries']
  },
  {
    slug: 'typing-exercises-for-beginners',
    title: 'Essential Typing Exercises for Beginners',
    excerpt: 'Start your typing journey with these fundamental exercises designed to build proper technique from day one.',
    date: 'August 12, 2023',
    readTime: 6,
    tags: ['beginner', 'exercises', 'practice'],
    content: `
# Essential Typing Exercises for Beginners

Learning to type properly from the beginning is much easier than correcting bad habits later. These exercises are designed to help beginners develop good typing technique, build muscle memory, and gradually increase speed and accuracy.

## Before You Start

Before diving into the exercises, ensure you have:

1. A comfortable, well-positioned keyboard
2. A quiet environment with minimal distractions
3. Good posture with feet flat on the floor
4. Fingers positioned on the home row (ASDF for left hand, JKL; for right hand)

Remember: Focus on accuracy first, then speed. It's better to type slowly and correctly than to develop bad habits by rushing.

## Exercise 1: Home Row Mastery

The home row is where your fingers should return to between keystrokes. This exercise helps build that fundamental habit.

**Practice:**
- asdf jkl; asdf jkl; asdf jkl;
- asdfjkl; asdfjkl; asdfjkl;
- aa ss dd ff jj kk ll ;;
- aj sk dl f; aj sk dl f;

Repeat each line 5-10 times, focusing on keeping your fingers on the home row when not pressing keys.

## Exercise 2: Reaching Up (Top Row)

Once comfortable with the home row, practice reaching to the top row.

**Practice:**
- qwer tyui qwer tyui
- asdf jkl; qwer tyui
- qawsedrftgyhuji
- art quit port your quit type

Repeat each line 5-10 times, always returning your fingers to the home row.

## Exercise 3: Reaching Down (Bottom Row)

Next, practice reaching to the bottom row.

**Practice:**
- zxcv bnm, zxcv bnm,
- asdf jkl; zxcv bnm,
- zaqxswcdevfrbgtnhymju,ki
- zero mix calm very next

Repeat each line 5-10 times, maintaining proper finger positioning.

## Exercise 4: Combining All Rows

Now practice using all three rows together.

**Practice:**
- qaz wsx edc rfv tgb yhn ujm ik, ol.
- The quick brown fox jumps over the lazy dog.
- Pack my box with five dozen liquor jugs.
- How vexingly quick daft zebras jump!

These sentences contain every letter of the alphabet, making them perfect for practice.

## Exercise 5: Numbers and Symbols

Once you're comfortable with letters, add numbers and common symbols.

**Practice:**
- 1234567890 1234567890
- 1q 2w 3e 4r 5t 6y 7u 8i 9o 0p
- !@#$%^&*() !@#$%^&*()
- a1s2d3f4g5h6j7k8l9;0

## Exercise 6: Common Words

Practice with the most frequently used words in English.

**Practice:**
- the and that have with
- this from they will your
- what were when there which
- their said them these would

## Exercise 7: Building Speed with Short Texts

Practice with short paragraphs, focusing on maintaining proper technique.

**Practice:**

*Paragraph 1:*
The sun rose slowly over the horizon, casting a golden glow across the calm lake. Birds began to sing their morning songs, welcoming the new day with cheerful melodies. A gentle breeze rustled the leaves of the tall oak trees that lined the shore.

*Paragraph 2:*
Learning to type efficiently is a valuable skill in today's digital world. With practice and patience, anyone can improve their typing speed and accuracy. Remember to maintain good posture and proper finger positioning as you work through these exercises.

## Exercise 8: Rhythm and Flow

Typing with a consistent rhythm helps build speed and reduce errors.

**Practice:**
- Type to a metronome set at 40-60 beats per minute
- Type one character per beat, focusing on consistency
- Gradually increase the tempo as you become comfortable

## Exercise 9: Eyes on the Screen

Practice keeping your eyes on the screen instead of looking at the keyboard.

**Practice:**
- Cover your hands with a cloth or keyboard cover
- Use a typing program that doesn't show what you're typing until you finish
- Practice typing with your eyes closed for short periods

## Exercise 10: Daily Practice Text

End each practice session with this paragraph that incorporates common letter combinations:

The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump! The five boxing wizards jump quickly. Crazy Fredrick bought many very exquisite opal jewels.

## Creating a Practice Routine

For best results:
- Practice for 15-30 minutes daily
- Focus on accuracy before speed
- Take short breaks every 10 minutes
- Track your progress with regular typing tests
- Be patient with yourself—skill development takes time

## Conclusion

Consistent practice with these exercises will help you build a solid foundation for typing skills. Remember that developing muscle memory takes time, so be patient with yourself. Within a few weeks of regular practice, you'll notice significant improvements in both your speed and accuracy.

As you become more comfortable, challenge yourself with longer texts, different content types, and gradually increase your speed goals. The key to success is regular, focused practice with proper technique.
    `,
    author: {
      name: 'Sarah Williams',
      avatar: '/authors/sarah-williams.jpg',
      bio: 'Typing instructor with a background in education and curriculum development.'
    },
    relatedPosts: ['how-to-improve-typing-speed', 'keyboard-ergonomics-guide']
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};