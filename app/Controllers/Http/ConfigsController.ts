import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Config from 'App/Models/Config'

export default class ConfigsController {

  public async index ({}: HttpContextContract) {
    const player = await Config.all()
    return player
  }

  public async store ({ request, response }: HttpContextContract) {
    const dados = request.all()
    const players = await Config.create(dados)
    return response.status(201).send(players)
  }

  public async show ({ params }: HttpContextContract) {
    const player = await Config.find(params.id)
    return player
  }

  public async update ({ params, request, response }: HttpContextContract) {
    const player = await Config.findOrFail(params.id);
    const dados = request.all();
    player.merge(dados)
    await player.save()
    return player
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const player = await Config.findOrFail(params.id)
    await player.delete()
    return response.status(204).send('registro excluído com sucesso!')
  }
}
