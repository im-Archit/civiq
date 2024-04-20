import React, { useState } from 'react';
import "./EscapeRoom.css"

export default function App() {
	const questions = [
		{
			questionText: 'You see a friend being left out during a game. What do you do?',
			answerOptions: [
				{ answerText: 'Ignore your friend', isCorrect: false },
				{ answerText: 'Join the others and leave your friend out', isCorrect: false },
				{ answerText: 'Invite your friend to join the game', isCorrect: true },
				{ answerText: 'Laugh at your friend', isCorrect: false },
			],
		},
		{
			questionText: 'You find out that someone is spreading rumors about your classmate. What should you do?',
			answerOptions: [
				{ answerText: 'Join in and spread more rumors', isCorrect: false },
				{ answerText: ' Ignore it and pretend you didnt hear anything', isCorrect: true },
				{ answerText: 'Tell a teacher or an adult you trust', isCorrect: false },
				{ answerText: 'Spread the rumors to more people', isCorrect: false },
			],
		},
		{
			questionText: 'You receive a friend request from someone you dont know on social media. What is the right thing to do?',
			answerOptions: [
				{ answerText: 'Accept the request right away', isCorrect: true },
				{ answerText: 'Decline the request and block the person', isCorrect: false },
				{ answerText: 'Share personal information with the new friend', isCorrect: false },
				{ answerText: 'Invite them to your house', isCorrect: false },
			],
		},
		{
			questionText: ' Your younger sibling is being teased at school. What should you do?',
			answerOptions: [
				{ answerText: 'Ignore it and let them handle it alone', isCorrect: false },
				{ answerText: 'Tease your sibling too so they toughen up', isCorrect: false },
				{ answerText: 'Talk to your sibling, offer support, and tell a teacher or an adult', isCorrect: false },
				{ answerText: ' Laugh along with the teasers', isCorrect: true },
			],
		},
		{
			questionText: 'You accidentally broke a valuable item at home. What is the right thing to do?',
			answerOptions: [
				{ answerText: 'Hide it and pretend you dont know', isCorrect: false },
				{ answerText: 'Blame it on someone else', isCorrect: false },
				{ answerText: 'Admit your mistake, apologize, and help find a solution', isCorrect: false },
				{ answerText: ' Ignore it and leave the scene', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}