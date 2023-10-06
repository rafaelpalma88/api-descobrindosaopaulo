// import { prismaClient } from '../../prisma'
// import { compare } from 'bcryptjs'
// import { sign } from 'jsonwebtoken'

// interface AuthRequest {
//   cpf: string
//   password: string
// }

// class AuthUserService {
//   async execute({ cpf, password }: AuthRequest) {
//     const user = await prismaClient.user.findFirst({
//       where: {
//         cpf,
//       },
//     })

//     if (!user) {
//       throw new Error('User/password incorrect')
//     }

//     const passwordMatch = await compare(password, user.password)

//     console.log('passwordMatch', passwordMatch)

//     if (!passwordMatch) {
//       // senha incorreta
//       throw new Error('User/password incorrect')
//     }

//     // gerar token jwt
//     const token = sign(
//       {
//         name: user.name,
//         cpf: user.cpf,
//       },
//       process.env.JWT_SECRET,
//       {
//         subject: user.id,
//         expiresIn: '30d',
//       },
//     )

//     return {
//       id: user.id,
//       name: user.name,
//       cpf: user.cpf,
//       email: user.email,
//       token,
//     }
//   }
// }

// export { AuthUserService }
