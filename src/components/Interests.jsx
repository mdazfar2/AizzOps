import React from 'react';
import { Dumbbell, Trophy, Heart, Target, Users, Clock } from 'lucide-react';

export default function Interests() {
  return (
    <section id="interests" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beyond The Code
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm not someone who only stays with a laptop—I have a life beyond technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#fff5e8] to-[#e6f7ff] p-8 rounded-2xl border border-[#ffd18a] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-xl flex items-center justify-center shadow-md">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sports Enthusiast</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm an active sports player who loves staying physically fit and competitive.
              Sports teach me teamwork, discipline, and the importance of never giving up.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#fff0e3] text-[#c75b00] rounded-full text-sm font-medium">
                Basketball
              </span>
              <span className="px-3 py-1 bg-[#fff0e3] text-[#c75b00] rounded-full text-sm font-medium">
                Volleyball
              </span>
              <span className="px-3 py-1 bg-[#fff0e3] text-[#c75b00] rounded-full text-sm font-medium">
                Football
              </span>
              <span className="px-3 py-1 bg-[#fff0e3] text-[#c75b00] rounded-full text-sm font-medium">
                Badminton
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#ffe8f4] to-[#e6f7ff] p-8 rounded-2xl border border-[#ffb8e2] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-xl flex items-center justify-center shadow-md">
                <Dumbbell className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fitness & Gym</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Regular gym-goer who believes in maintaining both physical and mental health.
              Fitness is not just about the body—it's about building discipline and consistency.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#ffe3f3] text-[#c21873] rounded-full text-sm font-medium">
                Strength Training
              </span>
              <span className="px-3 py-1 bg-[#ffe3f3] text-[#c21873] rounded-full text-sm font-medium">
                Cardio
              </span>
              <span className="px-3 py-1 bg-[#ffe3f3] text-[#c21873] rounded-full text-sm font-medium">
                Discipline
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Values & Principles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Punctuality</h4>
                <p className="text-gray-600 text-sm">
                  Whatever time I commit, I make sure the work is ready exactly at that time. Time is valuable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Dedication</h4>
                <p className="text-gray-600 text-sm">
                  I work with full dedication and commitment. I do what I say—no excuses, no shortcuts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Straightforward</h4>
                <p className="text-gray-600 text-sm">
                  Very direct and honest. I don't say something and then fail to do it. I stand by my word.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Genuine Connections</h4>
                <p className="text-gray-600 text-sm">
                  I prefer being with people who truly understand and value me. Quality over quantity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">No Fake People</h4>
                <p className="text-gray-600 text-sm">
                  I stay away from unnecessary people and superficial friendships. Authenticity matters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-r from-[#ff7b00] via-[#ff3b8f] to-[#19c3ff] rounded-lg flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Action-Oriented</h4>
                <p className="text-gray-600 text-sm">
                  I believe in action, not just words. Results speak louder than promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}