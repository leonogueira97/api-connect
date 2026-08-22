let users = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joao@email.com'
  }
];

function getUsers(req, res) {
  res.status(200).json(users);
}

function getUserById(req, res) {
  const id = Number(req.params.id);
  const user = users.find((item) => item.id === id);

  if (!user) {
    return res.status(404).json({
      message: 'Usuário não encontrado.'
    });
  }

  return res.status(200).json(user);
}

function createUser(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: 'Nome e email são obrigatórios.'
    });
  }

  const newUser = {
    id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,
    name,
    email
  };

  users.push(newUser);

  return res.status(201).json(newUser);
}

function updateUser(req, res) {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: 'Usuário não encontrado.'
    });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: 'Nome e email são obrigatórios.'
    });
  }

  users[userIndex] = {
    id,
    name,
    email
  };

  return res.status(200).json(users[userIndex]);
}

function deleteUser(req, res) {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: 'Usuário não encontrado.'
    });
  }

  users.splice(userIndex, 1);

  return res.status(204).send();
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
