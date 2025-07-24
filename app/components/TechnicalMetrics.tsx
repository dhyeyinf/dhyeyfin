'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
    return (
        <section className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
                    Impact & Achievements
                </motion.h2>

                <div className="grid grid-cols-1 gap-12">
                    {/* ML Model Performance */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-green-400">Machine Learning Model Performance</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                            >
                                <h4 className="text-lg font-semibold text-gray-300">Intrusion Detection Models</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                    <li>• Achieved 94% accuracy on the ISCXIDS2012 dataset </li>
                                    <li>• Reached AUC {'>'} 0.95 with top models like Random Forest & XGBoost </li>
                                    <li>• Benchmarked and analyzed over 15 different classifiers </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                            >
                                <h4 className="text-lg font-semibold text-gray-300">LLM & RAG Systems</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                    <li>• Deployed 3+ LLMs for natural language repository interaction </li>
                                    <li>• Built a RAG-based chatbot with LangChain, Gemini-Pro, and FAISS </li>
                                    <li>• Analyzed over 20K+ WAF log entries for threat detection </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Project Impact & Efficiency */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-green-400">Project Impact & Efficiency</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                            >
                                <h4 className="text-lg font-semibold text-gray-300">Developer Productivity</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                    <li>• Reduced code search time by 60% with an LLM-driven tool </li>
                                    <li>• Accelerated repository exploration by 35% using conversational queries</li>
                                    <li>• Improved metadata access time by 40% through metric automation </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                            >
                                <h4 className="text-lg font-semibold text-gray-300">Workflow Automation</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                    <li>• Saved ~60 minutes per document in data extraction workflows </li>
                                    <li>• Automated the retrieval of over 50 repository metrics </li>
                                    <li>• Enhanced team communication by 30% via a collaborative chatbot </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Open Source & Community Impact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-green-400">Open Source & Community Impact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                            >
                                <h4 className="text-lg font-semibold text-gray-300">Open Source Contributions</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                    <li>• Merged a pull request into the official Scikit-learn library </li>
                                    <li>• Contributed to core ML libraries like Hugging Face and Optuna </li>
                                    <li>• Active contributor to the CrewAI multi-agent framework </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                            >
                                <h4 className="text-lg font-semibold text-gray-300">Leadership & Initiative</h4>
                                <ul className="mt-2 space-y-2 text-gray-400">
                                    <li>• Support Team Member for the IIT Jodhpur Placement Cell</li>
                                    <li>• Public Relation Assistant Head for Prometeo, IIT Jodhpur's tech fest</li>
                                    <li>• Emphasized reproducibility with parameterized scripts & documentation</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}