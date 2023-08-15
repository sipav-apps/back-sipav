import { prisma } from "../services/prisma"

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      cpf: true,
      birthdate: true,
      telegram: true,
      phoneNumber: true,
      isResponsible: true,
      dependents: true,
    }
  });
  return user;
}

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      cpf: true,
      birthdate: true,
      telegram: true,
      phoneNumber: true,
      isResponsible: true,
      dependents: true,
    }
  });
  return users;
};

export const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      cpf: true,
      birthdate: true,
      telegram: true,
      phoneNumber: true,
      isResponsible: true,
      dependents: true,
    }
  });
  return user;
}

export const updateUser = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      cpf: true,
      birthdate: true,
      telegram: true,
      phoneNumber: true,
      isResponsible: true,
      dependents: true,
    }
  });
  return user;
}

export const deleteUser = async (id) => {
  await prisma.user.delete({
    where: {
      id
    }
  });
  return;
}