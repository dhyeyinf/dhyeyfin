'use client';
import { motion } from 'framer-motion';
export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Projects
				</motion.h2>
				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Scan Sequencer: Real-time Motion-Controlled Music',
							description: 'Interactive web-based music sequencer that transforms camera movements into dynamic musical compositions using computer vision.',
							details: [
								'Implemented real-time computer vision pipeline processing 30-60 FPS with <50ms motion-to-sound latency.',
								'Engineered pixel difference algorithms and Euclidean color distance calculations for motion detection.',
								'Integrated P5.js and Tone.js to create a vertical keyboard mapping system with 3-octave frequency range.',
								'Achieved privacy-first design with 100% local processing - no data transmission or storage.',
								'Optimized performance to <25% CPU usage through pixel sampling and adaptive frame rate control.',
							],
							tech: ['P5.js', 'Tone.js', 'Web Audio API', 'Computer Vision', 'JavaScript'],
							liveDemo: 'https://dhyeyinf.github.io/Real-time-Pixel-Synth/',
						},
						{
							title: 'Github-MCP: Conversational GitHub Explorer',
							description: 'Built a natural language interface leveraging the Model Context Protocol (MCP) to explore GitHub repositories conversationally.',
							details: [
								'Integrated 3+ OpenRouter-backed LLMs to process queries related to commits, issues, pull requests, branches, and file trees.',
								'Devised a conversational interface enabling repository exploration 35% faster than manual search.',
								'Automated retrieval of 50+ repository metrics, improving metadata access time by 40%.',
								'Enhanced engineering workflows by eliminating manual API calls and integrating structured data access into dev pipelines.',
							],
							tech: ['LangChain', 'OpenRouter', 'LLMs', 'GitHub REST API', 'Python'],
						},
						{
							title: 'ShieldNet: Network Intrusion Detection',
							description: 'Developed a modular ML pipeline to detect threats in the ISCXIDS2012 dataset.',
							details: [
								'Architectured the system using Python, Scikit-learn, and Shell scripting with clear GitHub documentation.',
								'Benchmarked 15+ classifiers (Random Forest, SVM, XGBoost) across 6 days of traffic data.',
								'Achieved AUC > 0.95 on top models, demonstrating strong detection performance.',
								'Integrated Google Sheets for real-time logging and ensured reproducibility via parameterized scripts.',
							],
							tech: ['Python', 'Scikit-learn', 'XGBoost', 'Shell Script', 'Google Sheets API'],
						},
						{
							title: 'ChatPDF using RAG',
							description: 'Document-based chatbot that leverages Retrieval-Augmented Generation to extract insights from PDFs.',
							details: [
								'Built using LangChain, Gemini-Pro LLM, FAISS vector DB, and Streamlit.',
								'Enabled users to interactively search and extract key insights from unstructured documents.',
								'Accelerated data extraction workflows by approximately 60 minutes per document.',
								'Streamlined PDF-based querying using an intuitive frontend and vector search.',
							],
							tech: ['LangChain', 'Gemini-Pro', 'FAISS', 'RAG', 'Streamlit'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-2xl font-bold">{project.title}</h3>
								{project.liveDemo && (
									<a
										href={project.liveDemo}
										target="_blank"
										rel="noopener noreferrer"
										className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg border border-blue-500/40 text-blue-300 transition-all duration-200 text-sm font-medium"
									>
										Live Demo →
									</a>
								)}
							</div>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
