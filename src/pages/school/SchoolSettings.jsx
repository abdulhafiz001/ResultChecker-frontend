import { useState } from 'react';
import { colors } from '../../constants/colors';

const SchoolSettings = () => {
  const [activeTab, setActiveTab] = useState('classes');

  const tabs = [
    { id: 'classes', name: 'Classes', icon: '🏫' },
    { id: 'subjects', name: 'Subjects', icon: '📚' },
    { id: 'teachers', name: 'Teachers', icon: '👨‍🏫' },
    { id: 'form-teachers', name: 'Form Teachers', icon: '👩‍🏫' },
    { id: 'school-info', name: 'School Info', icon: '🏢' },
  ];

  const ClassesTab = () => {
    const [classes, setClasses] = useState([
      { id: 1, name: 'JSS 1A', level: 'JSS 1', students: 35, formTeacher: 'Mrs. Johnson' },
      { id: 2, name: 'JSS 1B', level: 'JSS 1', students: 32, formTeacher: 'Mr. Adebayo' },
      { id: 3, name: 'JSS 2A', level: 'JSS 2', students: 38, formTeacher: 'Mrs. Okafor' },
      { id: 4, name: 'SS 1A', level: 'SS 1', students: 28, formTeacher: 'Mr. Ibrahim' },
    ]);

    const [newClass, setNewClass] = useState({ name: '', level: 'JSS 1' });

    const levels = ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3'];

    const handleAddClass = (e) => {
      e.preventDefault();
      if (newClass.name.trim()) {
        const newId = Math.max(...classes.map(c => c.id)) + 1;
        setClasses([...classes, {
          id: newId,
          name: newClass.name,
          level: newClass.level,
          students: 0,
          formTeacher: 'Not assigned'
        }]);
        setNewClass({ name: '', level: 'JSS 1' });
      }
    };

    const handleDeleteClass = (id) => {
      setClasses(classes.filter(c => c.id !== id));
    };

    return (
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Class</h3>
          <form onSubmit={handleAddClass} className="flex gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="className" className="block text-sm font-medium text-gray-700">
                Class Name
              </label>
              <input
                type="text"
                id="className"
                value={newClass.name}
                onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., JSS 1A, SS 2B"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="classLevel" className="block text-sm font-medium text-gray-700">
                Level
              </label>
              <select
                id="classLevel"
                value={newClass.level}
                onChange={(e) => setNewClass({ ...newClass, level: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.primary }}
            >
              Add Class
            </button>
          </form>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Existing Classes</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Form Teacher
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classes.map((classItem) => (
                  <tr key={classItem.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {classItem.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classItem.level}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classItem.students}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {classItem.formTeacher}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleDeleteClass(classItem.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const SubjectsTab = () => {
    const [subjects, setSubjects] = useState([
      { id: 1, name: 'Mathematics', code: 'MTH', assignedClasses: ['JSS 1A', 'JSS 1B', 'JSS 2A'] },
      { id: 2, name: 'English Language', code: 'ENG', assignedClasses: ['JSS 1A', 'JSS 1B', 'JSS 2A', 'SS 1A'] },
      { id: 3, name: 'Basic Science', code: 'BSC', assignedClasses: ['JSS 1A', 'JSS 1B', 'JSS 2A'] },
      { id: 4, name: 'Physics', code: 'PHY', assignedClasses: ['SS 1A'] },
    ]);

    const [newSubject, setNewSubject] = useState({ name: '', code: '' });
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [availableClasses] = useState(['JSS 1A', 'JSS 1B', 'JSS 2A', 'JSS 3A', 'SS 1A', 'SS 2A', 'SS 3A']);

    const handleAddSubject = (e) => {
      e.preventDefault();
      if (newSubject.name.trim() && newSubject.code.trim()) {
        const newId = Math.max(...subjects.map(s => s.id)) + 1;
        setSubjects([...subjects, {
          id: newId,
          name: newSubject.name,
          code: newSubject.code.toUpperCase(),
          assignedClasses: []
        }]);
        setNewSubject({ name: '', code: '' });
      }
    };

    const handleAssignClass = (subjectId, className) => {
      setSubjects(subjects.map(subject => {
        if (subject.id === subjectId) {
          return {
            ...subject,
            assignedClasses: [...subject.assignedClasses, className]
          };
        }
        return subject;
      }));
    };

    const handleUnassignClass = (subjectId, className) => {
      setSubjects(subjects.map(subject => {
        if (subject.id === subjectId) {
          return {
            ...subject,
            assignedClasses: subject.assignedClasses.filter(c => c !== className)
          };
        }
        return subject;
      }));
    };

    return (
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Subject</h3>
          <form onSubmit={handleAddSubject} className="flex gap-4 items-end">
            <div className="flex-1">
              <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700">
                Subject Name
              </label>
              <input
                type="text"
                id="subjectName"
                value={newSubject.name}
                onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., Mathematics, English Language"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="subjectCode" className="block text-sm font-medium text-gray-700">
                Subject Code
              </label>
              <input
                type="text"
                id="subjectCode"
                value={newSubject.code}
                onChange={(e) => setNewSubject({ ...newSubject, code: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., MTH, ENG"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.primary }}
            >
              Add Subject
            </button>
          </form>
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Subjects & Class Assignments</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {subjects.map((subject) => (
                <div key={subject.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{subject.name}</h4>
                      <p className="text-sm text-gray-500">Code: {subject.code}</p>
                    </div>
                    <button
                      onClick={() => setSelectedSubject(selectedSubject === subject.id ? null : subject.id)}
                      className="text-sm text-indigo-600 hover:text-indigo-900"
                    >
                      {selectedSubject === subject.id ? 'Hide' : 'Manage Classes'}
                    </button>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">Assigned Classes:</p>
                    <div className="flex flex-wrap gap-2">
                      {subject.assignedClasses.map((className) => (
                        <span
                          key={className}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {className}
                          <button
                            onClick={() => handleUnassignClass(subject.id, className)}
                            className="ml-1 text-indigo-600 hover:text-indigo-900"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                      {subject.assignedClasses.length === 0 && (
                        <span className="text-sm text-gray-500">No classes assigned</span>
                      )}
                    </div>
                  </div>

                  {selectedSubject === subject.id && (
                    <div className="border-t border-gray-200 pt-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">Available Classes:</p>
                      <div className="flex flex-wrap gap-2">
                        {availableClasses
                          .filter(className => !subject.assignedClasses.includes(className))
                          .map((className) => (
                            <button
                              key={className}
                              onClick={() => handleAssignClass(subject.id, className)}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                            >
                              + {className}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TeachersTab = () => {
    const [teachers, setTeachers] = useState([
      {
        id: 1,
        name: 'Mrs. Johnson',
        email: 'johnson@school.com',
        role: 'Teacher',
        assignedClasses: ['JSS 1A', 'JSS 2A'],
        subjects: ['Mathematics', 'Basic Science']
      },
      {
        id: 2,
        name: 'Mr. Adebayo',
        email: 'adebayo@school.com',
        role: 'Teacher',
        assignedClasses: ['JSS 1B', 'SS 1A'],
        subjects: ['English Language', 'Literature']
      },
      {
        id: 3,
        name: 'Mrs. Okafor',
        email: 'okafor@school.com',
        role: 'Head Teacher',
        assignedClasses: ['JSS 2A'],
        subjects: ['Social Studies', 'Civic Education']
      },
    ]);

    const [newTeacher, setNewTeacher] = useState({
      name: '',
      email: '',
      role: 'Teacher',
      password: '',
      assignedClasses: [],
      subjects: []
    });

    const [showAddForm, setShowAddForm] = useState(false);
    const availableClasses = ['JSS 1A', 'JSS 1B', 'JSS 2A', 'JSS 3A', 'SS 1A', 'SS 2A', 'SS 3A'];
    const availableSubjects = ['Mathematics', 'English Language', 'Basic Science', 'Physics', 'Chemistry', 'Biology', 'Social Studies'];
    const roles = ['Teacher', 'Head Teacher', 'Vice Principal', 'Principal'];

    const handleAddTeacher = (e) => {
      e.preventDefault();
      if (newTeacher.name.trim() && newTeacher.email.trim()) {
        const newId = Math.max(...teachers.map(t => t.id)) + 1;
        setTeachers([...teachers, { ...newTeacher, id: newId }]);
        setNewTeacher({
          name: '',
          email: '',
          role: 'Teacher',
          password: '',
          assignedClasses: [],
          subjects: []
        });
        setShowAddForm(false);
      }
    };

    const handleClassAssignment = (teacherId, className, isAssigned) => {
      setTeachers(teachers.map(teacher => {
        if (teacher.id === teacherId) {
          return {
            ...teacher,
            assignedClasses: isAssigned
              ? teacher.assignedClasses.filter(c => c !== className)
              : [...teacher.assignedClasses, className]
          };
        }
        return teacher;
      }));
    };

    const handleSubjectAssignment = (teacherId, subject, isAssigned) => {
      setTeachers(teachers.map(teacher => {
        if (teacher.id === teacherId) {
          return {
            ...teacher,
            subjects: isAssigned
              ? teacher.subjects.filter(s => s !== subject)
              : [...teacher.subjects, subject]
          };
        }
        return teacher;
      }));
    };

    return (
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Teachers Management</h3>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.primary }}
            >
              {showAddForm ? 'Cancel' : 'Add Teacher'}
            </button>
          </div>

          {showAddForm && (
            <form onSubmit={handleAddTeacher} className="border-t border-gray-200 pt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    value={newTeacher.name}
                    onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter teacher's full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={newTeacher.email}
                    onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="teacher@school.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <select
                    value={newTeacher.role}
                    onChange={(e) => setNewTeacher({ ...newTeacher, role: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    value={newTeacher.password}
                    onChange={(e) => setNewTeacher({ ...newTeacher, password: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assign Classes</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {availableClasses.map(className => (
                    <label key={className} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={newTeacher.assignedClasses.includes(className)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewTeacher({
                              ...newTeacher,
                              assignedClasses: [...newTeacher.assignedClasses, className]
                            });
                          } else {
                            setNewTeacher({
                              ...newTeacher,
                              assignedClasses: newTeacher.assignedClasses.filter(c => c !== className)
                            });
                          }
                        }}
                        className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-offset-2"
                        style={{ accentColor: colors.primary }}
                      />
                      <span className="ml-2 text-sm text-gray-700">{className}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assign Subjects</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {availableSubjects.map(subject => (
                    <label key={subject} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={newTeacher.subjects.includes(subject)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewTeacher({
                              ...newTeacher,
                              subjects: [...newTeacher.subjects, subject]
                            });
                          } else {
                            setNewTeacher({
                              ...newTeacher,
                              subjects: newTeacher.subjects.filter(s => s !== subject)
                            });
                          }
                        }}
                        className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-offset-2"
                        style={{ accentColor: colors.primary }}
                      />
                      <span className="ml-2 text-sm text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: colors.primary }}
                >
                  Add Teacher
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Existing Teachers</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {teachers.map((teacher) => (
                <div key={teacher.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{teacher.name}</h4>
                      <p className="text-sm text-gray-500">{teacher.email}</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                        {teacher.role}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Assigned Classes:</p>
                      <div className="space-y-1">
                        {availableClasses.map(className => (
                          <label key={className} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={teacher.assignedClasses.includes(className)}
                              onChange={() => handleClassAssignment(teacher.id, className, teacher.assignedClasses.includes(className))}
                              className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-offset-2"
                              style={{ accentColor: colors.primary }}
                            />
                            <span className="ml-2 text-sm text-gray-700">{className}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Teaching Subjects:</p>
                      <div className="space-y-1">
                        {availableSubjects.map(subject => (
                          <label key={subject} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={teacher.subjects.includes(subject)}
                              onChange={() => handleSubjectAssignment(teacher.id, subject, teacher.subjects.includes(subject))}
                              className="h-4 w-4 rounded border-gray-300 focus:ring-2 focus:ring-offset-2"
                              style={{ accentColor: colors.primary }}
                            />
                            <span className="ml-2 text-sm text-gray-700">{subject}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FormTeachersTab = () => {
    const [formTeacherAssignments, setFormTeacherAssignments] = useState([
      { classId: 1, className: 'JSS 1A', formTeacher: 'Mrs. Johnson', teacherId: 1 },
      { classId: 2, className: 'JSS 1B', formTeacher: 'Mr. Adebayo', teacherId: 2 },
      { classId: 3, className: 'JSS 2A', formTeacher: 'Mrs. Okafor', teacherId: 3 },
      { classId: 4, className: 'SS 1A', formTeacher: 'Not assigned', teacherId: null },
    ]);

    const availableTeachers = [
      { id: 1, name: 'Mrs. Johnson' },
      { id: 2, name: 'Mr. Adebayo' },
      { id: 3, name: 'Mrs. Okafor' },
      { id: 4, name: 'Mr. Ibrahim' },
    ];

    const handleFormTeacherAssignment = (classId, teacherId) => {
      const teacher = availableTeachers.find(t => t.id === parseInt(teacherId));
      setFormTeacherAssignments(assignments =>
        assignments.map(assignment =>
          assignment.classId === classId
            ? {
                ...assignment,
                teacherId: teacher ? teacher.id : null,
                formTeacher: teacher ? teacher.name : 'Not assigned'
              }
            : assignment
        )
      );
    };

    return (
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Form Teacher Assignments</h3>
          <p className="text-sm text-gray-600 mb-6">
            Assign a form teacher to each class. Form teachers are responsible for their class's overall management and student welfare.
          </p>

          <div className="space-y-4">
            {formTeacherAssignments.map((assignment) => (
              <div key={assignment.classId} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{assignment.className}</h4>
                  <p className="text-sm text-gray-500">
                    Current Form Teacher: {assignment.formTeacher}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={assignment.teacherId || ''}
                    onChange={(e) => handleFormTeacherAssignment(assignment.classId, e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Teacher</option>
                    {availableTeachers.map(teacher => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'classes':
        return <ClassesTab />;
      case 'subjects':
        return <SubjectsTab />;
      case 'teachers':
        return <TeachersTab />;
      case 'form-teachers':
        return <FormTeachersTab />;
      case 'school-info':
        return <div className="bg-white shadow rounded-lg p-6">School information settings coming soon...</div>;
      default:
        return <ClassesTab />;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">School Settings</h1>
        <p className="text-gray-600">Manage your school's classes, subjects, teachers, and other settings</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default SchoolSettings;
