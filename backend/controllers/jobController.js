exports.getJobs = (req, res) => {
    res.json([
        { id: 1, title: 'Oracle Integration Cloud Developer', location: 'Remote' },
        { id: 2, title: 'Full Stack Developer', location: 'New York' }
    ]);
};
