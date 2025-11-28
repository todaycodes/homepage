import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      category: '프로그래밍',
      skills: ['Python', 'SQL', 'R', 'JavaScript']
    },
    {
      category: '데이터 분석',
      skills: ['Pandas', 'NumPy', 'SciPy', 'Statistics']
    },
    {
      category: '머신러닝',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost']
    },
    {
      category: '시각화',
      skills: ['Matplotlib', 'Seaborn', 'Tableau', 'Power BI']
    },
    {
      category: '클라우드 & 도구',
      skills: ['AWS', 'Google Cloud', 'Docker', 'Git']
    },
    {
      category: '통계 분석',
      skills: ['A/B Testing', '회귀분석', '시계열분석', '가설검정']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">기술 스택</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((item, idx) => (
            <div key={idx} className="card">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">
            전문성 수준
          </h3>
          
          <div className="space-y-6">
            {[
              { skill: 'Python', level: 90 },
              { skill: 'SQL & 데이터 분석', level: 85 },
              { skill: '머신러닝 모델링', level: 80 },
              { skill: '데이터 시각화', level: 75 }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-700">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
